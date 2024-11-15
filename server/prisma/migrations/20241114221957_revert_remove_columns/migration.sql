/*
  Warnings:

  - You are about to drop the column `vigenteHasta` on the `accounts_suscripciones` table. All the data in the column will be lost.
  - Added the required column `vigente_hasta` to the `accounts_suscripciones` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts_suscripciones" DROP COLUMN "vigenteHasta",
ADD COLUMN     "vigente_hasta" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "alumnos" ADD COLUMN     "image_url" TEXT NOT NULL DEFAULT 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg';

-- AlterTable
ALTER TABLE "profesores" ADD COLUMN     "image_url" TEXT NOT NULL DEFAULT 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg';
