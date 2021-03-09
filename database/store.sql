/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100110
 Source Host           : localhost:3306
 Source Schema         : store

 Target Server Type    : MySQL
 Target Server Version : 100110
 File Encoding         : 65001

 Date: 09/03/2021 13:15:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for items
-- ----------------------------
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `price` int NOT NULL,
  `src` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `rating` int NOT NULL,
  `category` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of items
-- ----------------------------
INSERT INTO `items` VALUES (1, 'Cannon EOS', 36000, 'img/cannon_eos.jpg', 4, 1);
INSERT INTO `items` VALUES (2, 'Sony DSLR', 40000, 'img/sony_dslr.jpeg', 5, 1);
INSERT INTO `items` VALUES (3, 'Sony DSLR', 50000, 'img/sony_dslr2.jpeg', 4, 1);
INSERT INTO `items` VALUES (4, 'Olympus DSLR', 80000, 'img/olympus.jpg', 5, 1);
INSERT INTO `items` VALUES (5, 'Titan Model 2', 13000, 'img/titan201.jpg', 5, 2);
INSERT INTO `items` VALUES (6, 'Titan Model 1', 3000, 'img/titan301.jpg', 4, 2);
INSERT INTO `items` VALUES (7, 'HMT Milan', 8000, 'img/hmt.jpg', 3, 2);
INSERT INTO `items` VALUES (8, 'Favre Lueba ', 18000, 'img/favreleuba.jpg', 4, 2);
INSERT INTO `items` VALUES (9, 'Raymond', 1500, 'img/raymond.jpg', 5, 3);
INSERT INTO `items` VALUES (10, 'Charles', 1000, 'img/charles.jpg', 5, 3);
INSERT INTO `items` VALUES (11, 'HXR', 900, 'img/hxr.jpg', 4, 3);
INSERT INTO `items` VALUES (12, 'PINK', 1200, 'img/pink.jpg', 5, 3);

-- ----------------------------
-- Table structure for problem
-- ----------------------------
DROP TABLE IF EXISTS `problem`;
CREATE TABLE `problem`  (
  `id` int NOT NULL,
  `x` int NOT NULL,
  `y` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of problem
-- ----------------------------
INSERT INTO `problem` VALUES (1, 3, -4);
INSERT INTO `problem` VALUES (2, -2, 4);
INSERT INTO `problem` VALUES (3, 1, 1);
INSERT INTO `problem` VALUES (4, -1, 3);
INSERT INTO `problem` VALUES (5, 2, 5);

-- ----------------------------
-- Table structure for quadratic
-- ----------------------------
DROP TABLE IF EXISTS `quadratic`;
CREATE TABLE `quadratic`  (
  `id` int NOT NULL,
  `a` float NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of quadratic
-- ----------------------------
INSERT INTO `quadratic` VALUES (0, 0);
INSERT INTO `quadratic` VALUES (1, 2);
INSERT INTO `quadratic` VALUES (2, 1);
INSERT INTO `quadratic` VALUES (3, 0.5);
INSERT INTO `quadratic` VALUES (4, -1);
INSERT INTO `quadratic` VALUES (5, -2);

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `score` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of score
-- ----------------------------
INSERT INTO `score` VALUES (1, 6, 0);
INSERT INTO `score` VALUES (2, 7, 5);
INSERT INTO `score` VALUES (3, 8, 3);
INSERT INTO `score` VALUES (4, 7, 5);
INSERT INTO `score` VALUES (5, 8, 3);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `contact` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `city` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `address` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (6, 'Michael', 'clickhere0901@outlook.com', '39da041ada55a07c4c9e86131abc3698', '8766588', 'fdafda', 'fdafdsa');
INSERT INTO `users` VALUES (7, 'fdsa fdas', 'clickhere0902@outlook.com', '14e1b600b1fd579f47433b88e8d85291', 'abcde', 'fdsa', 'fdsa');
INSERT INTO `users` VALUES (8, 'fdsa fdas', 'denisnovikov@outlook.com', '14e1b600b1fd579f47433b88e8d85291', 'abcde', 'fdsa', 'fdsa');

-- ----------------------------
-- Table structure for users_items
-- ----------------------------
DROP TABLE IF EXISTS `users_items`;
CREATE TABLE `users_items`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `item_id` int NOT NULL,
  `status` enum('Added to cart','Confirmed') CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`, `item_id`) USING BTREE,
  INDEX `item_id`(`item_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users_items
-- ----------------------------
INSERT INTO `users_items` VALUES (20, 5, 5, 'Added to cart');

SET FOREIGN_KEY_CHECKS = 1;
