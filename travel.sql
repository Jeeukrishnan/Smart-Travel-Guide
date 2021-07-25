-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: localhost    Database: travel
-- ------------------------------------------------------
-- Server version	8.0.20-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('admin','admin');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `hotelbookid` int NOT NULL,
  `tourbookid` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `hotelbookid` (`hotelbookid`),
  KEY `tourbookid` (`tourbookid`),
  KEY `username` (`username`),
  CONSTRAINT `booking_ibfk_4` FOREIGN KEY (`hotelbookid`) REFERENCES `hotelbook` (`id`) ON DELETE CASCADE,
  CONSTRAINT `booking_ibfk_5` FOREIGN KEY (`tourbookid`) REFERENCES `tourbook` (`id`) ON DELETE CASCADE,
  CONSTRAINT `booking_ibfk_6` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8891 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `cityid` int NOT NULL AUTO_INCREMENT,
  `cityname` varchar(30) NOT NULL,
  `country` varchar(20) NOT NULL DEFAULT 'IN',
  PRIMARY KEY (`cityid`),
  UNIQUE KEY `cityname` (`cityname`,`country`)
) ENGINE=InnoDB AUTO_INCREMENT=3115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (3112,'Churu','India'),(3113,'jaipur','India'),(1,'Pune','India'),(3114,'udaipur','India');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `city_in_hotel`
--

DROP TABLE IF EXISTS `city_in_hotel`;
/*!50001 DROP VIEW IF EXISTS `city_in_hotel`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `city_in_hotel` AS SELECT 
 1 AS `hotelid`,
 1 AS `hotelname`,
 1 AS `hoteladd`,
 1 AS `rating`,
 1 AS `cost_per_room`,
 1 AS `room_avi`,
 1 AS `imgurl`,
 1 AS `cityid`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `dailyCost` decimal(6,2) NOT NULL,
  `address` varchar(30) DEFAULT NULL,
  `locationid` int NOT NULL,
  `roomAvi` int NOT NULL,
  `roomBook` int NOT NULL,
  `noOfStar` int NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `amenities` varchar(1000) NOT NULL,
  `abouthotel` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `search_hotel` (`name`),
  KEY `locationid` (`locationid`),
  CONSTRAINT `hotel_ibfk_1` FOREIGN KEY (`locationid`) REFERENCES `city` (`cityid`) ON DELETE CASCADE,
  CONSTRAINT `hotel_chk_1` CHECK ((`dailyCost` > 0)),
  CONSTRAINT `hotel_chk_2` CHECK (((`noOfStar` >= 1) and (`noOfStar` <= 10)))
) ENGINE=InnoDB AUTO_INCREMENT=2225 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'JW Marriot Hotel',3000.00,'ShivajiNagar',1,100,20,9,'https://lh3.googleusercontent.com/p/AF1QipMN560lZsju7XU_uBqVtN9pFZSKuvUN3fynB_s0=w592-h404-n-k-rw-no-v1','Great Pool, Free Parking , Great Dining ','Contemporary rooms in an upscale hotel featuring 5 restaurants, a spa & an outdoor pool.');
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotelbook`
--

DROP TABLE IF EXISTS `hotelbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotelbook` (
  `id` int NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `checkin` date NOT NULL,
  `checkout` date NOT NULL,
  `noOfrooms` int NOT NULL,
  `hotelname` varchar(100) NOT NULL,
  `bookeddate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `username` (`username`),
  KEY `hotelname` (`hotelname`),
  CONSTRAINT `hotelbook_ibfk_3` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE,
  CONSTRAINT `hotelbook_ibfk_4` FOREIGN KEY (`hotelname`) REFERENCES `hotel` (`name`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotelbook`
--

LOCK TABLES `hotelbook` WRITE;
/*!40000 ALTER TABLE `hotelbook` DISABLE KEYS */;
/*!40000 ALTER TABLE `hotelbook` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `setdateforhotelbook` BEFORE INSERT ON `hotelbook` FOR EACH ROW BEGIN
    SET NEW.bookeddate = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `hotelreview`
--

DROP TABLE IF EXISTS `hotelreview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotelreview` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hotelname` varchar(100) NOT NULL,
  `detailedReview` varchar(1000) DEFAULT NULL,
  `submissionDate` datetime NOT NULL,
  `author` varchar(35) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  KEY `hotelname` (`hotelname`),
  CONSTRAINT `hotelreview_ibfk_3` FOREIGN KEY (`author`) REFERENCES `users` (`username`) ON DELETE CASCADE,
  CONSTRAINT `hotelreview_ibfk_4` FOREIGN KEY (`hotelname`) REFERENCES `hotel` (`name`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1227 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotelreview`
--

LOCK TABLES `hotelreview` WRITE;
/*!40000 ALTER TABLE `hotelreview` DISABLE KEYS */;
INSERT INTO `hotelreview` VALUES (1226,'JW Marriot Hotel','Very good service....good staff...','2020-05-30 18:50:00','asisrout');
/*!40000 ALTER TABLE `hotelreview` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place_pics`
--

DROP TABLE IF EXISTS `place_pics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place_pics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `locationid` int NOT NULL,
  `caption` varchar(50) DEFAULT 'pic',
  `description` varchar(1000) DEFAULT NULL,
  `img` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `locationid` (`locationid`),
  CONSTRAINT `place_pics_ibfk_1` FOREIGN KEY (`locationid`) REFERENCES `tourist_place` (`touristid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4326 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place_pics`
--

LOCK TABLES `place_pics` WRITE;
/*!40000 ALTER TABLE `place_pics` DISABLE KEYS */;
INSERT INTO `place_pics` VALUES (4322,1,'its a clockHouse','mana ki yahi clockhouse hai apn jayada kuch nahi kar sakte hai','/home/ashok/Desktop/image/clock.jpg'),(4323,2,'its a Hawamahal','mana ki yahi hawamahal hai apn jayada kuch nahi kar sakte hai','/home/ashok/Desktop/image/hawamahal.jpg'),(4325,4,'Its Imagicaa','Theme Park,Water Park,Snow Park','https://lh5.googleusercontent.com/p/AF1QipP9wFSafIxAv9B7-LuQcVPhmEO4OL9xRpJuMbnq=w518-h354-n-k-no');
/*!40000 ALTER TABLE `place_pics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numStars` int NOT NULL,
  `detailedReview` varchar(1000) DEFAULT NULL,
  `submissionDate` datetime NOT NULL,
  `author` varchar(35) NOT NULL,
  `locationid` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  KEY `locationid` (`locationid`),
  CONSTRAINT `review_ibfk_3` FOREIGN KEY (`author`) REFERENCES `users` (`username`) ON DELETE CASCADE,
  CONSTRAINT `review_ibfk_4` FOREIGN KEY (`locationid`) REFERENCES `tourist_place` (`touristid`) ON DELETE CASCADE,
  CONSTRAINT `review_chk_1` CHECK (((`numStars` >= 1) and (`numStars` <= 10)))
) ENGINE=InnoDB AUTO_INCREMENT=1519 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1516,8,'its a good place to visit','2020-05-30 18:41:35','akbhobhiya',1),(1517,10,'its a very good place to visit','2020-05-30 18:45:35','asisrout',2),(1518,9,'Excellent','2020-06-10 18:40:30','asisrout',4);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourbook`
--

DROP TABLE IF EXISTS `tourbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourbook` (
  `id` int NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `locationid` int NOT NULL,
  `traveldate` date NOT NULL,
  `noOfticket` int NOT NULL,
  `bookeddate` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `username` (`username`),
  KEY `locationid` (`locationid`),
  CONSTRAINT `tourbook_ibfk_5` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE,
  CONSTRAINT `tourbook_ibfk_6` FOREIGN KEY (`locationid`) REFERENCES `tourist_place` (`touristid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourbook`
--

LOCK TABLES `tourbook` WRITE;
/*!40000 ALTER TABLE `tourbook` DISABLE KEYS */;
/*!40000 ALTER TABLE `tourbook` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `setdatetoubook` BEFORE INSERT ON `tourbook` FOR EACH ROW BEGIN
    SET NEW.bookeddate = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tourist_place`
--

DROP TABLE IF EXISTS `tourist_place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourist_place` (
  `locationid` int NOT NULL,
  `dailyCost` decimal(6,2) NOT NULL,
  `aviTour` int NOT NULL,
  `bookedTour` int NOT NULL,
  `touristid` int NOT NULL AUTO_INCREMENT,
  `region` varchar(100) NOT NULL,
  PRIMARY KEY (`touristid`),
  KEY `locationid` (`locationid`),
  CONSTRAINT `tourist_place_ibfk_1` FOREIGN KEY (`locationid`) REFERENCES `city` (`cityid`) ON DELETE CASCADE,
  CONSTRAINT `tourist_place_chk_1` CHECK ((`dailyCost` > 0))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourist_place`
--

LOCK TABLES `tourist_place` WRITE;
/*!40000 ALTER TABLE `tourist_place` DISABLE KEYS */;
INSERT INTO `tourist_place` VALUES (3112,3433.23,100,25,1,'churu'),(3113,3422.23,125,50,2,'pune'),(1,3000.00,100,25,4,'Imagicaa');
/*!40000 ALTER TABLE `tourist_place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(10) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fullname` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  UNIQUE KEY `username` (`username`,`email`),
  UNIQUE KEY `username_2` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `search_user` (`username`,`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('akbhobhiya','kuchbhibolo','Ashok Bhobhiya','akbhobhiya2000@gmail.com'),('asis','asis','asis','asisrout7@gmail.com'),('asisrout','haanyahihai','Asis Rout','yashtono@gamil.com'),('jeeu','jeeu','jeeu','jeeu@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'travel'
--
/*!50003 DROP PROCEDURE IF EXISTS `delete_hotel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_hotel`(in hotel_name varchar(100))
begin
delete from hotel where hotel.name=hotel_name;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `edit_hotel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_hotel`(in hotel_name varchar(100), in hotel_dailyCost DECIMAL(6,2),hotel_address varchar(30), in hotel_roomAvi int, 
in hotel_roomBook int, in hotel_noOfStar int,in hotel_img_url varchar(200), in hotel_amenities varchar(1000),in hotel_aboutHotel varchar(1000))
begin
UPDATE hotel set dailyCost=hotel_dailyCost,address=hotel_address, roomAvi=hotel_roomAvi,roomBook=hotel_roomBook,
noOfStar=hotel_noOfStar,img_url=hotel_img_url,amenities=hotel_amenities,aboutHotel=hotel_aboutHotel where hotel.name= hotel_name;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_hotel_from_city` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_hotel_from_city`(in Querycity varchar(100))
begin
select h.id,h.name,h.address,c.cityname,h.noOfStar as Rating, h.roomAvi,h.dailyCost as Price ,h.img_url from hotel h,
city c where h.locationid=c.cityid and c.cityname=Querycity;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_tourbooked` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_tourbooked`(in Queryusername varchar(100))
begin
select u.username, t.region, tour.traveldate,tour.noOfticket,tour.bookeddate from users u , tourist_place t, tourbook tour where
u.username=Queryusername and tour.username=u.username and tour.locationid = t.touristid; 
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_tourist_from_city` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_tourist_from_city`(in Querycity varchar(100))
begin
select t.touristid, t.region as tourist_place_name ,c.cityname , c.country, t.dailyCost,t.aviTour,r.numStars,r.detailedReview,
p.img,p.caption,p.description from city c,tourist_place t, review r, place_pics p
where c.cityname=Querycity and t.locationid=c.cityid and r.locationid=t.touristid 
and p.locationid = t.touristid; 
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `users_edit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `users_edit`(in user_fullname varchar(20),in user_password varchar(100),in user_email varchar(50),in user_username varchar(10))
begin
UPDATE users set password=user_password,fullname=user_fullname,email=user_email WHERE username=user_username;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_deleteAccount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user_deleteAccount`(in user_username varchar(10))
begin
DELETE FROM users WHERE users.username=user_username;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `city_in_hotel`
--

/*!50001 DROP VIEW IF EXISTS `city_in_hotel`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `city_in_hotel` AS select `h`.`id` AS `hotelid`,`h`.`name` AS `hotelname`,`h`.`address` AS `hoteladd`,`h`.`noOfStar` AS `rating`,`h`.`dailyCost` AS `cost_per_room`,`h`.`roomAvi` AS `room_avi`,`h`.`img_url` AS `imgurl`,`c`.`cityid` AS `cityid` from (`hotel` `h` join `city` `c`) where (`c`.`cityid` = `h`.`locationid`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-21 17:50:26
