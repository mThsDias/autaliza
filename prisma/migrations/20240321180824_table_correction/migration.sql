/*
  Warnings:

  - You are about to drop the column `update_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "update_at",
ADD COLUMN     "updated_at" TIMESTAMP(3);
