/*
  Warnings:

  - You are about to drop the `jobs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image_url` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `jobapplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" ADD COLUMN     "image_url" SET DATA TYPE VARCHAR,
ALTER COLUMN "name" SET DATA TYPE VARCHAR,
ALTER COLUMN "email" SET DATA TYPE VARCHAR,
ALTER COLUMN "description" SET DATA TYPE VARCHAR,
ALTER COLUMN "web_url" SET DATA TYPE VARCHAR;

-- AlterTable
ALTER TABLE "jobapplication" RENAME CONSTRAINT "jobaplication_pkey" TO "jobapplication_pkey",
ADD COLUMN     "image_url" SET DATA TYPE VARCHAR,
ALTER COLUMN "description" SET DATA TYPE VARCHAR,
ALTER COLUMN "cover_letter" SET DATA TYPE VARCHAR;

-- AlterTable
ALTER TABLE "user" RENAME CONSTRAINT "User_pkey" TO "user_pkey",
ADD COLUMN     "image_url" SET DATA  TYPE VARCHAR,
ALTER COLUMN "first_name" SET DATA TYPE VARCHAR,
ALTER COLUMN "last_name" SET DATA TYPE VARCHAR,
ALTER COLUMN "email" SET DATA TYPE VARCHAR,
ALTER COLUMN "password" SET DATA TYPE VARCHAR;

-- DropTable
DROP TABLE "jobs";

-- CreateTable
CREATE TABLE job IF NOT EXISTS (
    "id" SERIAL NOT NULL,
    "image_url" VARCHAR,
    "title" VARCHAR,
    "description" VARCHAR,
    "location" VARCHAR,
    "salary" DECIMAL(65,30),
    "company_id" INTEGER,
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3),

    CONSTRAINT "job_pkey" PRIMARY KEY ("id")
);
