/*
  Warnings:

  - You are about to drop the `posts_car` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts_car" DROP CONSTRAINT "posts_car_owner_id_fkey";

-- DropTable
DROP TABLE "posts_car";

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" DECIMAL(65,30) NOT NULL,
    "km" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "image" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
