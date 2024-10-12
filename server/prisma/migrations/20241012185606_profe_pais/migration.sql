-- AlterTable
ALTER TABLE "profesores" ADD COLUMN     "paisId" TEXT NOT NULL DEFAULT '173';

-- AddForeignKey
ALTER TABLE "profesores" ADD CONSTRAINT "profesores_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "paises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
