import "dotenv/config";
import { Client, DatabaseError } from "pg";
import fs from "fs";
import * as log4js from "log4js";

const sql = new Client({
  connectionString: process.env.DIRECT_URL,
});

log4js.configure({
  appenders: {
    consola: { type: "console" },
    detailed: { type: "file", filename: "errors.log", level: "error" },
  },
  categories: {
    default: { appenders: ["consola"], level: "info" },
    error: { appenders: ["detailed"], level: "error" },
  },
});

async function main() {
  const log = log4js.getLogger();
  const errorLog = log4js.getLogger("error");

  await sql.connect();
  log.info("Proceso iniciado");

  // supabase auth setup
  await sql.query(`
    CREATE OR REPLACE FUNCTION public.handle_new_user()
    RETURNS TRIGGER AS $$
    BEGIN
      INSERT INTO public.accounts (id, email)
          VALUES (new.id, new.email);
          RETURN new;
    END;
    $$ LANGUAGE PLPGSQL SECURITY DEFINER;
  `);

  await sql.query(`
     CREATE OR REPLACE TRIGGER on_auth_user_created
         AFTER INSERT ON auth.users
         FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
  `);

  await sql.query(`
     CREATE OR REPLACE FUNCTION public.handle_user_delete()
     RETURNS TRIGGER AS $$
     BEGIN
       DELETE FROM auth.users WHERE id = old.id;
       RETURN old;
     END;
     $$ LANGUAGE PLPGSQL SECURITY DEFINER;
   `);

  await sql.query(`
     CREATE OR REPLACE FUNCTION public.handle_sb_user_delete()
     RETURNS TRIGGER AS $$
     BEGIN
       DELETE FROM public.accounts WHERE id = old.id;
       RETURN old;
     END;
     $$ LANGUAGE PLPGSQL SECURITY DEFINER;
   `);

  await sql.query(`
    CREATE OR REPLACE TRIGGER on_profile_user_deleted
    AFTER DELETE ON public.accounts
    FOR EACH ROW EXECUTE PROCEDURE public.handle_user_delete()
    `);

  await sql.query(`
    CREATE OR REPLACE trigger on_sb_profile_user_deleted
    AFTER DELETE ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_sb_user_delete()
    `);

  log.info(
    "Se han agregado los triggers y funciones que se vinculan con supabase."
  );

  // static
  const seedFromSQL = async (filePath: string) => {
    try {
      log.info(`${filePath} | Inicio de seeding de datos estáticos`);
      const data = fs.readFileSync(filePath, "utf-8");
      await sql.query(data);
      log.info(`${filePath} | migrado exitosamente`);
    } catch (error: unknown) {
      if (error instanceof DatabaseError) {
        log.warn(
          `${filePath} | Algo salio mal en DB. Más detalle en errors.log`
        );
        errorLog.error(error);
      } else {
        errorLog.error(error);
        log.error(`${filePath} | Algo salio mal.`);
        console.error(error);
      }
    }
  };

  // static
  await seedFromSQL("prisma/seeders/ubigeos.sql");
  await seedFromSQL("prisma/seeders/init_script.sql");

  log.info("Proceso de seeding terminado");

  process.exit();
}

main();
