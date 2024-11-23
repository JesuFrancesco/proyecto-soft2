/*
  Warnings:

  - You are about to drop the column `vacantesMax` on the `clases` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clases" RENAME COLUMN "vacantesMax" TO "vacantes_max";
