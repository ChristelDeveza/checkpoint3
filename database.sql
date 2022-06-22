CREATE SCHEMA IF NOT EXISTS `checkpoint3`;
USE `checkpoint3` ;

DROP TABLE IF EXISTS `album`;
CREATE TABLE `album` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `artist` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `album` VALUES (1,'Random Access Memories','Daft Punk'),(2,'The Dark Side of the Moon','Pink Floyd');

DROP TABLE IF EXISTS `track`;
CREATE TABLE `track` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `duration` INT NOT NULL DEFAULT 0,
  `album_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`album_id`)
    REFERENCES `album` (`id`));

INSERT INTO `track` VALUES (1,'Give Life Back to Music',274,1),(2,'The Game of Love',322,1),(3,'Giorgio by Moroder',544,1),(4,'Speak to Me',65,2),(5,'Breathe',169,2),(6,'On the Run',225,2);