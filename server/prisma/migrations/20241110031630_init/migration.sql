-- CreateTable
CREATE TABLE "accounts" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pais_id" TEXT,
    "distrito_id" TEXT,
    "provincia_id" TEXT,
    "departamento_id" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts_suscripciones" (
    "tipo" TEXT NOT NULL,
    "vigenteHasta" TIMESTAMP(3) NOT NULL,
    "accountId" UUID NOT NULL,
    "suscripcionId" INTEGER NOT NULL,

    CONSTRAINT "accounts_suscripciones_pkey" PRIMARY KEY ("accountId","suscripcionId")
);

-- CreateTable
CREATE TABLE "suscripciones" (
    "id" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "alumnos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "account_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alumnos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profesores" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "account_id" UUID,
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
    "profesor_id" INTEGER,
    "alumno_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especialidades" (
    "id" SERIAL NOT NULL,
    "especialidad" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "especialidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subespecialidades" (
    "id" SERIAL NOT NULL,
    "subEspecialidad" TEXT NOT NULL,
    "especialidad_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subespecialidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_educativos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "asset_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "material_educativos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_clases" (
    "id" SERIAL NOT NULL,
    "material_id" INTEGER,
    "clase_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "material_clases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clases" (
    "id" SERIAL NOT NULL,
    "es_virtual" BOOLEAN,
    "es_grupal" BOOLEAN,
    "fecha_clase" TIMESTAMP(3) NOT NULL,
    "profesor_id" INTEGER,
    "subespecialidad_id" INTEGER,
    "sector_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sectores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sectores_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "mensajes" (
    "id" SERIAL NOT NULL,
    "contenido" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mensajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_mensajes" (
    "id_chat" INTEGER NOT NULL,
    "id_mensaje" INTEGER NOT NULL,

    CONSTRAINT "chat_mensajes_pkey" PRIMARY KEY ("id_chat","id_mensaje")
);

-- CreateTable
CREATE TABLE "alumno_clases" (
    "nota" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alumno_id" INTEGER NOT NULL,
    "clase_id" INTEGER NOT NULL,

    CONSTRAINT "alumno_clases_pkey" PRIMARY KEY ("alumno_id","clase_id")
);

-- CreateTable
CREATE TABLE "alumno_preferencias" (
    "id_alumno" INTEGER NOT NULL,
    "id_preferencia" INTEGER NOT NULL,

    CONSTRAINT "alumno_preferencias_pkey" PRIMARY KEY ("id_alumno","id_preferencia")
);

-- CreateTable
CREATE TABLE "profesor_especialidades" (
    "profesor_id" INTEGER NOT NULL,
    "especialidad_id" INTEGER NOT NULL,
    "subespecialidad_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profesor_especialidades_pkey" PRIMARY KEY ("profesor_id","especialidad_id")
);

-- CreateTable
CREATE TABLE "profesor_subespecialidades" (
    "subespecialidad_id" INTEGER NOT NULL,
    "profesor_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profesor_subespecialidades_pkey" PRIMARY KEY ("profesor_id","subespecialidad_id")
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
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_phone_key" ON "accounts"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_suscripciones_tipo_key" ON "accounts_suscripciones"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_suscripciones_accountId_key" ON "accounts_suscripciones"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "suscripciones_id_key" ON "suscripciones"("id");

-- CreateIndex
CREATE UNIQUE INDEX "suscripciones_tipo_key" ON "suscripciones"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "alumnos_account_id_key" ON "alumnos"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "profesores_account_id_key" ON "profesores"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "material_educativos_asset_url_key" ON "material_educativos"("asset_url");

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
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_pais_id_fkey" FOREIGN KEY ("pais_id") REFERENCES "paises"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts_suscripciones" ADD CONSTRAINT "accounts_suscripciones_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts_suscripciones" ADD CONSTRAINT "accounts_suscripciones_suscripcionId_fkey" FOREIGN KEY ("suscripcionId") REFERENCES "suscripciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumnos" ADD CONSTRAINT "alumnos_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesores" ADD CONSTRAINT "profesores_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "profesores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_alumno_id_fkey" FOREIGN KEY ("alumno_id") REFERENCES "alumnos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subespecialidades" ADD CONSTRAINT "subespecialidades_especialidad_id_fkey" FOREIGN KEY ("especialidad_id") REFERENCES "especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_clases" ADD CONSTRAINT "material_clases_clase_id_fkey" FOREIGN KEY ("clase_id") REFERENCES "clases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_clases" ADD CONSTRAINT "material_clases_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "material_educativos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clases" ADD CONSTRAINT "clases_subespecialidad_id_fkey" FOREIGN KEY ("subespecialidad_id") REFERENCES "subespecialidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clases" ADD CONSTRAINT "clases_sector_id_fkey" FOREIGN KEY ("sector_id") REFERENCES "sectores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clases" ADD CONSTRAINT "clases_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "profesores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "alumnos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_mensajes" ADD CONSTRAINT "chat_mensajes_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "chats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_mensajes" ADD CONSTRAINT "chat_mensajes_id_mensaje_fkey" FOREIGN KEY ("id_mensaje") REFERENCES "mensajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_clases" ADD CONSTRAINT "alumno_clases_alumno_id_fkey" FOREIGN KEY ("alumno_id") REFERENCES "alumnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_clases" ADD CONSTRAINT "alumno_clases_clase_id_fkey" FOREIGN KEY ("clase_id") REFERENCES "clases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_preferencias" ADD CONSTRAINT "alumno_preferencias_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "alumnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_preferencias" ADD CONSTRAINT "alumno_preferencias_id_preferencia_fkey" FOREIGN KEY ("id_preferencia") REFERENCES "especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_especialidades" ADD CONSTRAINT "profesor_especialidades_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "profesores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_especialidades" ADD CONSTRAINT "profesor_especialidades_especialidad_id_fkey" FOREIGN KEY ("especialidad_id") REFERENCES "especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_subespecialidades" ADD CONSTRAINT "profesor_subespecialidades_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "profesores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_subespecialidades" ADD CONSTRAINT "profesor_subespecialidades_subespecialidad_id_fkey" FOREIGN KEY ("subespecialidad_id") REFERENCES "subespecialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provincias" ADD CONSTRAINT "provincias_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distritos" ADD CONSTRAINT "distritos_provincia_id_fkey" FOREIGN KEY ("provincia_id") REFERENCES "provincias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distritos" ADD CONSTRAINT "distritos_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
