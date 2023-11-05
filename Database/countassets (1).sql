-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2023 at 09:37 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `countassets`
--

-- --------------------------------------------------------

--
-- Table structure for table `counta`
--

CREATE TABLE `counta` (
  `trees` int(11) NOT NULL,
  `solarpanel` int(11) NOT NULL,
  `windturbine` int(11) NOT NULL,
  `rainwaterharvestingsystem` int(11) NOT NULL,
  `heatpump` int(11) NOT NULL,
  `patio` int(11) NOT NULL,
  `herbgarden` int(11) NOT NULL,
  `gazebo` int(11) NOT NULL,
  `gardensculpture` int(11) NOT NULL,
  `flowerbed` int(11) NOT NULL,
  `compostingbin` int(11) NOT NULL,
  `bush` int(11) NOT NULL,
  `bluerecyclingbin` int(11) NOT NULL,
  `vegetablegarden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `counta`
--

INSERT INTO `counta` (`trees`, `solarpanel`, `windturbine`, `rainwaterharvestingsystem`, `heatpump`, `patio`, `herbgarden`, `gazebo`, `gardensculpture`, `flowerbed`, `compostingbin`, `bush`, `bluerecyclingbin`, `vegetablegarden`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
