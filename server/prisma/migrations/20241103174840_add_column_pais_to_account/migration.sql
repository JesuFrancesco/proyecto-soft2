/*
  Warnings:

  - You are about to drop the column `paisId` on the `profesores` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "profesores" DROP CONSTRAINT "profesores_paisId_fkey";

-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "pais_id" TEXT,
ALTER COLUMN "distrito_id" DROP DEFAULT,
ALTER COLUMN "provincia_id" DROP DEFAULT,
ALTER COLUMN "departamento_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "profesores" DROP COLUMN "paisId";

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_pais_id_fkey" FOREIGN KEY ("pais_id") REFERENCES "paises"("id") ON DELETE SET NULL ON UPDATE CASCADE;
