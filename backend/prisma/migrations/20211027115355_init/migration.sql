-- CreateTable
CREATE TABLE `ReminderConfig` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `send15DaysBefore` BOOLEAN NOT NULL DEFAULT false,
    `send7DaysBefore` BOOLEAN NOT NULL DEFAULT false,
    `send1DaysBefore` BOOLEAN NOT NULL DEFAULT false,
    `vacineId` INTEGER NULL,

    UNIQUE INDEX `ReminderConfig_vacineId_key`(`vacineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vacine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `dose` INTEGER NOT NULL,
    `dataAplicacao` DATE NOT NULL,
    `userId` INTEGER NULL,

    UNIQUE INDEX `Vacine_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `uuid` VARCHAR(191) NOT NULL,
    `disabled` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReminderConfig` ADD CONSTRAINT `ReminderConfig_vacineId_fkey` FOREIGN KEY (`vacineId`) REFERENCES `Vacine`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vacine` ADD CONSTRAINT `Vacine_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
