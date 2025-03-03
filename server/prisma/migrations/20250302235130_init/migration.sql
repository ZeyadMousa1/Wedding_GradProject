/*
  Warnings:

  - You are about to drop the column `loaction` on the `hall` table. All the data in the column will be lost.
  - Added the required column `location` to the `Hall` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hall` DROP COLUMN `loaction`,
    ADD COLUMN `location` VARCHAR(191) NOT NULL;
