/*
  Warnings:

  - Added the required column `imagePublicId` to the `Hall` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hall` ADD COLUMN `imagePublicId` VARCHAR(191) NOT NULL;
