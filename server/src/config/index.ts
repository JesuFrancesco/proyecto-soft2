import dotenv from "dotenv";
import * as log4js from "log4js";

// env
dotenv.config();

// logger
log4js.configure({
  appenders: { consola: { type: "console" } },
  categories: { default: { appenders: ["consola"], level: "info" } },
});

const logger = log4js.getLogger("cheese");

const config = {
  env: process.env.NODE_ENV || "dev",
  supabaseURL: process.env.SUPABASE_URL || "none",
  supabaseServiceRole: process.env.SUPABASE_SERVICE_ROLE || "none"
};

export { config, logger };
