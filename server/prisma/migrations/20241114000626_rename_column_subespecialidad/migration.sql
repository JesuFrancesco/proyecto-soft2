/*
  Warnings:

  - You are about to drop the column `subEspecialidad` on the `subespecialidades` table. All the data in the column will be lost.
  - Added the required column `subespecialidad` to the `subespecialidades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "subespecialidades" RENAME COLUMN "subEspecialidad" TO "subespecialidad";
