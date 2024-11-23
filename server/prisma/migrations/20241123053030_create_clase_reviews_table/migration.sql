/*
  Warnings:

  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.

*/

-- RenameTable
ALTER TABLE "reviews" RENAME TO "profesor_reviews";

-- DropPK
ALTER TABLE "profesor_reviews" DROP CONSTRAINT "reviews_pkey";

-- AddForeignKey
ALTER TABLE "profesor_reviews" ADD CONSTRAINT "profesor_reviews_alumno_id_fkey" FOREIGN KEY ("alumno_id") REFERENCES "alumnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor_reviews" ADD CONSTRAINT "profesor_reviews_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "profesores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "clase_reviews" (
    "descripcion" TEXT NOT NULL,
    "ensenanza" INTEGER,
    "puntualidad" INTEGER,
    "disponibilidad" INTEGER,
    "comunicacion" INTEGER,
    "evaluacion" INTEGER,
    "empatia" INTEGER,
    "alumno_id" INTEGER NOT NULL,
    "clase_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clase_reviews_pkey" PRIMARY KEY ("alumno_id","clase_id")
);


-- AddForeignKey
ALTER TABLE "clase_reviews" ADD CONSTRAINT "clase_reviews_alumno_id_fkey" FOREIGN KEY ("alumno_id") REFERENCES "alumnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clase_reviews" ADD CONSTRAINT "clase_reviews_clase_id_fkey" FOREIGN KEY ("clase_id") REFERENCES "clases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
