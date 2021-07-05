CREATE DATABASE IF NOT EXISTS `game-of-thrones-db`;

USE `game-of-thrones-db`;

CREATE TABLE IF NOT EXISTS `characters` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `appears_on` VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `houses` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `region` VARCHAR(255) NOT NULL,
    `founded_in` VARCHAR(255) NOT NULL,
    `current_lord` INT,
    FOREIGN KEY (`current_lord`) REFERENCES `characters`(`id`)
);

INSERT INTO `characters` VALUES (1, "Daenerys Targaryen", "Seasons: 1, 2, 3, 4, 5, 6");
INSERT INTO `characters` VALUES (2, "Cersei Lannister", "Seasons: 1, 2, 3, 4, 5, 6");

INSERT INTO `houses` VALUES (1, "House Stark of Winterfell", "The North", "Age of Heroes", null);
INSERT INTO `houses` VALUES (2, "House Targaryen of King's Landing", "The Crownlands", "House Targaryen: >114 BCHouse Targaryen of King's Landing:1 AC", 1);
INSERT INTO `houses` VALUES (3, "House Lannister of Casterly Rock", "The Westerlands", "Age of Heroes", 2);
