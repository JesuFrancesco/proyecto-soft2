-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "distrito_id" TEXT,
    "provincia_id" TEXT,
    "departamento_id" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountSuscripcion" (
    "tipo" TEXT NOT NULL,
    "vigenteHasta" TIMESTAMP(3) NOT NULL,
    "accountId" INTEGER NOT NULL,
    "suscripcionId" INTEGER NOT NULL,

    CONSTRAINT "AccountSuscripcion_pkey" PRIMARY KEY ("accountId","suscripcionId")
);

-- CreateTable
CREATE TABLE "Suscripcion" (
    "id" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "alumnos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "account_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alumnos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profesores" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "account_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profesores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "ensenanza" INTEGER,
    "puntualidad" INTEGER,
    "disponibilidad" INTEGER,
    "comunicacion" INTEGER,
    "evaluacion" INTEGER,
    "empatia" INTEGER,
    "id_profesor" INTEGER,
    "id_alumno" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especialidad" (
    "id" SERIAL NOT NULL,
    "especialidad" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "especialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subespecialidad" (
    "id" SERIAL NOT NULL,
    "subEspecialidad" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "especialidadId" INTEGER NOT NULL,

    CONSTRAINT "subespecialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_educativo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "assetUrl" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "material_educativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_clase" (
    "id" SERIAL NOT NULL,
    "material_id" INTEGER,
    "claseId" INTEGER,

    CONSTRAINT "material_clase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clase" (
    "id" SERIAL NOT NULL,
    "ubicacion" INTEGER,
    "es_virtual" BOOLEAN,
    "es_grupal" BOOLEAN,
    "fecha_clase" TIMESTAMP(3) NOT NULL,
    "id_profesor" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subEspecialidadId" INTEGER,

    CONSTRAINT "clase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chats" (
    "id" SERIAL NOT NULL,
    "id_alumno" INTEGER,
    "id_profesor" INTEGER,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensaje" (
    "id" SERIAL NOT NULL,
    "contenido" TEXT,
    "fecha_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mensaje_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_mensaje" (
    "id_chat" INTEGER NOT NULL,
    "id_mensaje" INTEGER NOT NULL,

    CONSTRAINT "chat_mensaje_pkey" PRIMARY KEY ("id_chat","id_mensaje")
);

-- CreateTable
CREATE TABLE "alumno_clase" (
    "nota" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alumno_id" INTEGER NOT NULL,
    "clase_id" INTEGER NOT NULL,

    CONSTRAINT "alumno_clase_pkey" PRIMARY KEY ("alumno_id","clase_id")
);

-- CreateTable
CREATE TABLE "alumno_preferencia" (
    "id_alumno" INTEGER NOT NULL,
    "id_preferencia" INTEGER NOT NULL,
    "subEspecialidadId" INTEGER,

    CONSTRAINT "alumno_preferencia_pkey" PRIMARY KEY ("id_alumno","id_preferencia")
);

-- CreateTable
CREATE TABLE "profesor_especialidad" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_profesor" INTEGER NOT NULL,
    "id_especialidad" INTEGER NOT NULL,
    "subEspecialidadId" INTEGER,

    CONSTRAINT "profesor_especialidad_pkey" PRIMARY KEY ("id_profesor","id_especialidad")
);

-- CreateTable
CREATE TABLE "profesor_subespecialidad" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subespecialidad_id" INTEGER NOT NULL,
    "profesor_id" INTEGER NOT NULL,

    CONSTRAINT "profesor_subespecialidad_pkey" PRIMARY KEY ("profesor_id","subespecialidad_id")
);

-- CreateTable
CREATE TABLE "departamentos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "departamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provincias" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "departamento_id" TEXT NOT NULL,

    CONSTRAINT "provincias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distritos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "provincia_id" TEXT NOT NULL,
    "departamento_id" TEXT NOT NULL,

    CONSTRAINT "distritos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paises" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "paises_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_username_key" ON "accounts"("username");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_phone_key" ON "accounts"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "AccountSuscripcion_tipo_key" ON "AccountSuscripcion"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "AccountSuscripcion_accountId_key" ON "AccountSuscripcion"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Suscripcion_id_key" ON "Suscripcion"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Suscripcion_tipo_key" ON "Suscripcion"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "alumnos_account_id_key" ON "alumnos"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "profesores_account_id_key" ON "profesores"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "material_educativo_assetUrl_key" ON "material_educativo"("assetUrl");

-- CreateIndex
CREATE UNIQUE INDEX "departamentos_name_key" ON "departamentos"("name");

-- CreateIndex
CREATE UNIQUE INDEX "provincias_name_key" ON "provincias"("name");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_distrito_id_fkey" FOREIGN KEY ("distrito_id") REFERENCES "distritos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_provincia_id_fkey" FOREIGN KEY ("provincia_id") REFERENCES "provincias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountSuscripcion" ADD CONSTRAINT "AccountSuscripcion_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountSuscripcion" ADD CONSTRAINT "AccountSuscripcion_suscripcionId_fkey" FOREIGN KEY ("suscripcionId") REFERENCES "Suscripcion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumnos" ADD CONSTRAINT "alumnos_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesores" ADD CONSTRAINT "profesores_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "alumnos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subespecialidad" ADD CONSTRAINT "subespecialidad_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "especialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_clase" ADD CONSTRAINT "material_clase_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "clase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_clase" ADD CONSTRAINT "material_clase_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "material_educativo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clase" ADD CONSTRAINT "clase_subEspecialidadId_fkey" FOREIGN KEY ("subEspecialidadId") REFERENCES "subespecialidad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clase" ADD CONSTRAINT "clase_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "alumnos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_mensaje" ADD CONSTRAINT "chat_mensaje_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "chats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_mensaje" ADD CONSTRAINT "chat_mensaje_id_mensaje_fkey" FOREIGN KEY ("id_mensaje") REFERENCES "mensaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_clase" ADD CONSTRAINT "alumno_clase_alumno_id_fkey" FOREIGN KEY ("alumno_id") REFERENCES "alumnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_clase" ADD CONSTRAINT "alumno_clase_clase_id_fkey" FOREIGN KEY ("clase_id") REFERENCES "clase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_preferencia" ADD CONSTRAINT "alumno_preferencia_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "alumnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_preferencia" ADD CONSTRAINT "alumno_preferencia_id_preferencia_fkey" FOREIGN KEY ("id_preferencia") REFERENCES "especialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_especialidad" ADD CONSTRAINT "profesor_especialidad_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_especialidad" ADD CONSTRAINT "profesor_especialidad_id_especialidad_fkey" FOREIGN KEY ("id_especialidad") REFERENCES "especialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_subespecialidad" ADD CONSTRAINT "profesor_subespecialidad_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "profesores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_subespecialidad" ADD CONSTRAINT "profesor_subespecialidad_subespecialidad_id_fkey" FOREIGN KEY ("subespecialidad_id") REFERENCES "subespecialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provincias" ADD CONSTRAINT "provincias_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distritos" ADD CONSTRAINT "distritos_provincia_id_fkey" FOREIGN KEY ("provincia_id") REFERENCES "provincias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distritos" ADD CONSTRAINT "distritos_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
