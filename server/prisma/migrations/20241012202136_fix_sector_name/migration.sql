/*
  Warnings:

  - You are about to drop the `Sector` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "clases" DROP CONSTRAINT "clases_sectorId_fkey";

-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "distrito_id" SET DEFAULT '150117',
ALTER COLUMN "provincia_id" SET DEFAULT '1501',
ALTER COLUMN "departamento_id" SET DEFAULT '15';

-- DropTable
DROP TABLE "Sector";

-- CreateTable
CREATE TABLE "sectores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "sectores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "clases" ADD CONSTRAINT "clases_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "sectores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
