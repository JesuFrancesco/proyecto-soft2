/*
  Warnings:

  - You are about to drop the column `passwordHash` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `accounts` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "accounts_username_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "passwordHash",
DROP COLUMN "username",
ALTER COLUMN "phone" DROP NOT NULL;
