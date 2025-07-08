-- MySQL dump 10.13  Distrib 8.4.5, for Linux (x86_64)
--
-- Host: localhost    Database: Opintorekisteri
-- ------------------------------------------------------
-- Server version	8.4.5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `Arviointi`
--

LOCK TABLES `Arviointi` WRITE;
/*!40000 ALTER TABLE `Arviointi` DISABLE KEYS */;
INSERT INTO `Arviointi` VALUES (1,1,1,'2025-05-29'),(1,2,3,'2025-05-29'),(1,3,4,'2025-05-29'),(1,4,5,'2025-05-29'),(2,1,5,'2025-04-01'),(2,2,3,'2025-01-27'),(2,3,2,'2025-05-29'),(3,1,1,'2025-05-01'),(3,2,2,'2025-05-01'),(5,1,1,'2025-05-29'),(5,4,5,'2025-05-29'),(6,1,5,'2025-05-29'),(6,2,3,'2025-06-29'),(7,1,5,'2025-03-14'),(7,2,4,'2025-05-30'),(8,1,5,'2025-06-29'),(8,2,5,'2025-05-30'),(8,3,5,'2025-05-30'),(8,4,5,'2025-05-30');
/*!40000 ALTER TABLE `Arviointi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Opintojakso`
--

LOCK TABLES `Opintojakso` WRITE;
/*!40000 ALTER TABLE `Opintojakso` DISABLE KEYS */;
INSERT INTO `Opintojakso` VALUES (1,'Alla Hejsan På Svenska!',5,'IN06969'),(2,'Matematiikan perusteet 1',10,'IN00686'),(3,'Matematiikan perusteet 2',10,'IN00688'),(4,'Sähkötyöturvallisuus 101',5,'IN00777');
/*!40000 ALTER TABLE `Opintojakso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Opiskelija`
--

LOCK TABLES `Opiskelija` WRITE;
/*!40000 ALTER TABLE `Opiskelija` DISABLE KEYS */;
INSERT INTO `Opiskelija` VALUES (1,'Matti','Mainio','TVT25SPL','Verstaskatu 3'),(2,'Kroisos','Pennonen','TVT25SPL','Penninkatu 6'),(3,'Aku','Ankka','TVT25SPL','Paratiisitie 31'),(4,'Hannu','Hanhi','TVT25SPL','Kevätkatu 42'),(5,'Mikko','Mallikas','TVT25SPL','Varastokatu 13'),(6,'Otso','Åkerman','TVT25SPL','Eerikinkatu 2B'),(7,'Iines','Ankka','TVT25SPL','Liisankatu 7'),(8,'Pelle','Peloton','TVT25SPL','Tehdaskatu 9'),(9,'Hessu','Hopo','TVT25SPL','Lahdenväylä 7');
/*!40000 ALTER TABLE `Opiskelija` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-08 22:57:55
