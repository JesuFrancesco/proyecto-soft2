-- CreateTable
CREATE TABLE "accounts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "distrito_id" INTEGER,
    "provincia_id" INTEGER,
    "departamento_id" INTEGER,
    CONSTRAINT "accounts_distrito_id_fkey" FOREIGN KEY ("distrito_id") REFERENCES "distritos" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "accounts_provincia_id_fkey" FOREIGN KEY ("provincia_id") REFERENCES "provincias" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "accounts_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AccountSuscripcion" (
    "tipo" TEXT NOT NULL,
    "vigenteHasta" DATETIME NOT NULL,
    "accountId" INTEGER NOT NULL,
    "suscripcionId" INTEGER NOT NULL,

    PRIMARY KEY ("accountId", "suscripcionId"),
    CONSTRAINT "AccountSuscripcion_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AccountSuscripcion_suscripcionId_fkey" FOREIGN KEY ("suscripcionId") REFERENCES "Suscripcion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Suscripcion" (
    "id" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "alumnos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "account_id" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "alumnos_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "profesores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "account_id" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "profesores_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion" TEXT NOT NULL,
    "ensenanza" INTEGER,
    "puntualidad" INTEGER,
    "disponibilidad" INTEGER,
    "comunicacion" INTEGER,
    "evaluacion" INTEGER,
    "empatia" INTEGER,
    "id_profesor" INTEGER,
    "id_alumno" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "reviews_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "reviews_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "alumnos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "secciones" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "especialidad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "especialidad" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "subespecialidad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subEspecialidad" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "especialidadId" INTEGER NOT NULL,
    CONSTRAINT "subespecialidad_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "especialidad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "material_educativo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT,
    "assetUrl" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "material_seccion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "material_id" INTEGER,
    "seccion_id" INTEGER,
    CONSTRAINT "material_seccion_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "material_educativo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "material_seccion_seccion_id_fkey" FOREIGN KEY ("seccion_id") REFERENCES "secciones" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "clase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ubicacion" INTEGER,
    "es_virtual" BOOLEAN,
    "es_grupal" BOOLEAN,
    "fecha_clase" DATETIME NOT NULL,
    "id_profesor" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subEspecialidadId" INTEGER,
    CONSTRAINT "clase_subEspecialidadId_fkey" FOREIGN KEY ("subEspecialidadId") REFERENCES "subespecialidad" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "clase_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_alumno" INTEGER,
    "id_profesor" INTEGER,
    "fecha_creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "chats_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "alumnos" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "chats_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "mensaje" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contenido" TEXT,
    "fecha_envio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "chat_mensaje" (
    "id_chat" INTEGER NOT NULL,
    "id_mensaje" INTEGER NOT NULL,

    PRIMARY KEY ("id_chat", "id_mensaje"),
    CONSTRAINT "chat_mensaje_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "chats" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "chat_mensaje_id_mensaje_fkey" FOREIGN KEY ("id_mensaje") REFERENCES "mensaje" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "alumno_clase" (
    "nota" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alumno_id" INTEGER NOT NULL,
    "clase_id" INTEGER NOT NULL,

    PRIMARY KEY ("alumno_id", "clase_id"),
    CONSTRAINT "alumno_clase_alumno_id_fkey" FOREIGN KEY ("alumno_id") REFERENCES "alumnos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "alumno_clase_clase_id_fkey" FOREIGN KEY ("clase_id") REFERENCES "clase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "alumno_preferencia" (
    "id_alumno" INTEGER NOT NULL,
    "id_preferencia" INTEGER NOT NULL,
    "subEspecialidadId" INTEGER,

    PRIMARY KEY ("id_alumno", "id_preferencia"),
    CONSTRAINT "alumno_preferencia_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "alumnos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "alumno_preferencia_id_preferencia_fkey" FOREIGN KEY ("id_preferencia") REFERENCES "especialidad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "profesor_especialidad" (
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_profesor" INTEGER NOT NULL,
    "id_especialidad" INTEGER NOT NULL,
    "subEspecialidadId" INTEGER,

    PRIMARY KEY ("id_profesor", "id_especialidad"),
    CONSTRAINT "profesor_especialidad_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "profesor_especialidad_id_especialidad_fkey" FOREIGN KEY ("id_especialidad") REFERENCES "especialidad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "profesor_subespecialidad" (
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subespecialidad_id" INTEGER NOT NULL,
    "profesor_id" INTEGER NOT NULL,

    PRIMARY KEY ("profesor_id", "subespecialidad_id"),
    CONSTRAINT "profesor_subespecialidad_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "profesores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "profesor_subespecialidad_subespecialidad_id_fkey" FOREIGN KEY ("subespecialidad_id") REFERENCES "subespecialidad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "departamentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "provincias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "departamento_id" INTEGER NOT NULL,
    CONSTRAINT "provincias_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "distritos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "provincia_id" INTEGER NOT NULL,
    "departamento_id" INTEGER NOT NULL,
    CONSTRAINT "distritos_provincia_id_fkey" FOREIGN KEY ("provincia_id") REFERENCES "provincias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "distritos_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
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
