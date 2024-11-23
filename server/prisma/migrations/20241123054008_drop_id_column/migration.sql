/*
  Warnings:

  - You are about to drop the column `id` on the `profesor_reviews` table. All the data in the column will be lost.
  - Made the column `profesor_id` on table `profesor_reviews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `alumno_id` on table `profesor_reviews` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "profesor_reviews" DROP CONSTRAINT "reviews_alumno_id_fkey";

-- DropForeignKey
ALTER TABLE "profesor_reviews" DROP CONSTRAINT "reviews_profesor_id_fkey";

-- AlterTable
ALTER TABLE "profesor_reviews" DROP COLUMN "id",
ALTER COLUMN "profesor_id" SET NOT NULL,
ALTER COLUMN "alumno_id" SET NOT NULL,
ADD CONSTRAINT "profesor_reviews_pkey" PRIMARY KEY ("alumno_id", "profesor_id");
