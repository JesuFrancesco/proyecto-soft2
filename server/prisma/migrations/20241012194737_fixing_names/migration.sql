/*
  Warnings:

  - You are about to drop the `AccountSuscripcion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Suscripcion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `alumno_clase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `alumno_preferencia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `chat_mensaje` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `especialidad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `material_clase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `material_educativo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mensaje` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profesor_especialidad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profesor_subespecialidad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subespecialidad` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AccountSuscripcion" DROP CONSTRAINT "AccountSuscripcion_accountId_fkey";

-- DropForeignKey
ALTER TABLE "AccountSuscripcion" DROP CONSTRAINT "AccountSuscripcion_suscripcionId_fkey";

-- DropForeignKey
ALTER TABLE "alumno_clase" DROP CONSTRAINT "alumno_clase_alumno_id_fkey";

-- DropForeignKey
ALTER TABLE "alumno_clase" DROP CONSTRAINT "alumno_clase_clase_id_fkey";

-- DropForeignKey
ALTER TABLE "alumno_preferencia" DROP CONSTRAINT "alumno_preferencia_id_alumno_fkey";

-- DropForeignKey
ALTER TABLE "alumno_preferencia" DROP CONSTRAINT "alumno_preferencia_id_preferencia_fkey";

-- DropForeignKey
ALTER TABLE "chat_mensaje" DROP CONSTRAINT "chat_mensaje_id_chat_fkey";

-- DropForeignKey
ALTER TABLE "chat_mensaje" DROP CONSTRAINT "chat_mensaje_id_mensaje_fkey";

-- DropForeignKey
ALTER TABLE "clase" DROP CONSTRAINT "clase_id_profesor_fkey";

-- DropForeignKey
ALTER TABLE "clase" DROP CONSTRAINT "clase_subEspecialidadId_fkey";

-- DropForeignKey
ALTER TABLE "material_clase" DROP CONSTRAINT "material_clase_claseId_fkey";

-- DropForeignKey
ALTER TABLE "material_clase" DROP CONSTRAINT "material_clase_material_id_fkey";

-- DropForeignKey
ALTER TABLE "profesor_especialidad" DROP CONSTRAINT "profesor_especialidad_id_especialidad_fkey";

-- DropForeignKey
ALTER TABLE "profesor_especialidad" DROP CONSTRAINT "profesor_especialidad_id_profesor_fkey";

-- DropForeignKey
ALTER TABLE "profesor_subespecialidad" DROP CONSTRAINT "profesor_subespecialidad_profesor_id_fkey";

-- DropForeignKey
ALTER TABLE "profesor_subespecialidad" DROP CONSTRAINT "profesor_subespecialidad_subespecialidad_id_fkey";

-- DropForeignKey
ALTER TABLE "subespecialidad" DROP CONSTRAINT "subespecialidad_especialidadId_fkey";

-- DropTable
DROP TABLE "AccountSuscripcion";

-- DropTable
DROP TABLE "Suscripcion";

-- DropTable
DROP TABLE "alumno_clase";

-- DropTable
DROP TABLE "alumno_preferencia";

-- DropTable
DROP TABLE "chat_mensaje";

-- DropTable
DROP TABLE "clase";

-- DropTable
DROP TABLE "especialidad";

-- DropTable
DROP TABLE "material_clase";

-- DropTable
DROP TABLE "material_educativo";

-- DropTable
DROP TABLE "mensaje";

-- DropTable
DROP TABLE "profesor_especialidad";

-- DropTable
DROP TABLE "profesor_subespecialidad";

-- DropTable
DROP TABLE "subespecialidad";

-- CreateTable
CREATE TABLE "accounts_suscripciones" (
    "tipo" TEXT NOT NULL,
    "vigenteHasta" TIMESTAMP(3) NOT NULL,
    "accountId" INTEGER NOT NULL,
    "suscripcionId" INTEGER NOT NULL,

    CONSTRAINT "accounts_suscripciones_pkey" PRIMARY KEY ("accountId","suscripcionId")
);

-- CreateTable
CREATE TABLE "suscripciones" (
    "id" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL
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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "especialidadId" INTEGER NOT NULL,

    CONSTRAINT "subespecialidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_educativos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "assetUrl" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "material_educativos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_clases" (
    "id" SERIAL NOT NULL,
    "material_id" INTEGER,
    "claseId" INTEGER,

    CONSTRAINT "material_clases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clases" (
    "id" SERIAL NOT NULL,
    "ubicacion" INTEGER,
    "es_virtual" BOOLEAN,
    "es_grupal" BOOLEAN,
    "fecha_clase" TIMESTAMP(3) NOT NULL,
    "id_profesor" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subEspecialidadId" INTEGER,
    "sectorId" INTEGER NOT NULL,

    CONSTRAINT "clases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sector" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensajes" (
    "id" SERIAL NOT NULL,
    "contenido" TEXT,
    "fecha_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "subEspecialidadId" INTEGER,

    CONSTRAINT "alumno_preferencias_pkey" PRIMARY KEY ("id_alumno","id_preferencia")
);

-- CreateTable
CREATE TABLE "profesor_especialidades" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_profesor" INTEGER NOT NULL,
    "id_especialidad" INTEGER NOT NULL,
    "subEspecialidadId" INTEGER,

    CONSTRAINT "profesor_especialidades_pkey" PRIMARY KEY ("id_profesor","id_especialidad")
);

-- CreateTable
CREATE TABLE "profesor_subespecialidades" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subespecialidad_id" INTEGER NOT NULL,
    "profesor_id" INTEGER NOT NULL,

    CONSTRAINT "profesor_subespecialidades_pkey" PRIMARY KEY ("profesor_id","subespecialidad_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_suscripciones_tipo_key" ON "accounts_suscripciones"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_suscripciones_accountId_key" ON "accounts_suscripciones"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "suscripciones_id_key" ON "suscripciones"("id");

-- CreateIndex
CREATE UNIQUE INDEX "suscripciones_tipo_key" ON "suscripciones"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "material_educativos_assetUrl_key" ON "material_educativos"("assetUrl");

-- AddForeignKey
ALTER TABLE "accounts_suscripciones" ADD CONSTRAINT "accounts_suscripciones_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts_suscripciones" ADD CONSTRAINT "accounts_suscripciones_suscripcionId_fkey" FOREIGN KEY ("suscripcionId") REFERENCES "suscripciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subespecialidades" ADD CONSTRAINT "subespecialidades_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_clases" ADD CONSTRAINT "material_clases_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "clases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_clases" ADD CONSTRAINT "material_clases_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "material_educativos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clases" ADD CONSTRAINT "clases_subEspecialidadId_fkey" FOREIGN KEY ("subEspecialidadId") REFERENCES "subespecialidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clases" ADD CONSTRAINT "clases_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "Sector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clases" ADD CONSTRAINT "clases_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "profesor_especialidades" ADD CONSTRAINT "profesor_especialidades_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_especialidades" ADD CONSTRAINT "profesor_especialidades_id_especialidad_fkey" FOREIGN KEY ("id_especialidad") REFERENCES "especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_subespecialidades" ADD CONSTRAINT "profesor_subespecialidades_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "profesores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_subespecialidades" ADD CONSTRAINT "profesor_subespecialidades_subespecialidad_id_fkey" FOREIGN KEY ("subespecialidad_id") REFERENCES "subespecialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
