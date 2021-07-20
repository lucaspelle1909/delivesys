-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 20-Jul-2021 às 03:31
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `delivesys`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `custlocations`
--

CREATE TABLE `custlocations` (
  `CustAccount` int(10) NOT NULL,
  `LocationId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `custtable`
--

CREATE TABLE `custtable` (
  `CustAccount` int(10) NOT NULL,
  `CpfCnpj` varchar(15) NOT NULL,
  `CustName` varchar(20) NOT NULL,
  `BirthDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `custtable`
--

INSERT INTO `custtable` (`CustAccount`, `CpfCnpj`, `CustName`, `BirthDate`) VALUES
(1, '123', 'Test', '2021-07-07');

-- --------------------------------------------------------

--
-- Estrutura da tabela `deliverycompanytable`
--

CREATE TABLE `deliverycompanytable` (
  `DeliveryCompanyId` int(10) NOT NULL,
  `CpfCnpj` varchar(15) NOT NULL,
  `UserId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `deliveryorders`
--

CREATE TABLE `deliveryorders` (
  `DeliveryId` int(10) NOT NULL,
  `CustAccount` int(10) NOT NULL,
  `DeliveryAddress` int(10) NOT NULL,
  `CollectAddress` int(10) NOT NULL,
  `CreatedDateTime` datetime NOT NULL DEFAULT current_timestamp(),
  `CollectDateTime` datetime NOT NULL,
  `DeliveryDateTime` datetime NOT NULL,
  `DeliveryStatus` int(2) NOT NULL,
  `FreightValue` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `deliveryordersitems`
--

CREATE TABLE `deliveryordersitems` (
  `RecId` int(10) NOT NULL,
  `DeliveryId` int(10) NOT NULL,
  `ItemId` int(10) NOT NULL,
  `Quantity` int(10) NOT NULL,
  `ValueAmount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `inventtable`
--

CREATE TABLE `inventtable` (
  `ItemId` int(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `ValueAmount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `logisticspostaladdress`
--

CREATE TABLE `logisticspostaladdress` (
  `LocationId` int(11) NOT NULL,
  `ZipCode` int(10) NOT NULL,
  `Street` varchar(20) NOT NULL,
  `State` varchar(2) NOT NULL,
  `City` varchar(20) NOT NULL,
  `Country` varchar(20) NOT NULL,
  `StreetNumber` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `logisticspostaladdress`
--

INSERT INTO `logisticspostaladdress` (`LocationId`, `ZipCode`, `Street`, `State`, `City`, `Country`, `StreetNumber`) VALUES
(1, 95180000, 'Test', 'RS', 'Farroupilha', 'Bra', 100);

-- --------------------------------------------------------

--
-- Estrutura da tabela `permissiongroup`
--

CREATE TABLE `permissiongroup` (
  `PermissionId` int(10) NOT NULL,
  `PermissionType` int(5) NOT NULL,
  `Description` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `permissiongroup`
--

INSERT INTO `permissiongroup` (`PermissionId`, `PermissionType`, `Description`) VALUES
(1, 1, 'Administrator'),
(2, 2, 'Deliveryman');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sysusers`
--

CREATE TABLE `sysusers` (
  `UserId` int(11) NOT NULL,
  `PermissionId` int(11) NOT NULL,
  `FirstName` varchar(20) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `custlocations`
--
ALTER TABLE `custlocations`
  ADD PRIMARY KEY (`CustAccount`,`LocationId`),
  ADD KEY `LogisticsPostalAddressFK` (`LocationId`);

--
-- Índices para tabela `custtable`
--
ALTER TABLE `custtable`
  ADD PRIMARY KEY (`CustAccount`);

--
-- Índices para tabela `deliverycompanytable`
--
ALTER TABLE `deliverycompanytable`
  ADD PRIMARY KEY (`DeliveryCompanyId`),
  ADD KEY `SysUsersFK` (`UserId`);

--
-- Índices para tabela `deliveryorders`
--
ALTER TABLE `deliveryorders`
  ADD PRIMARY KEY (`DeliveryId`),
  ADD KEY `CustTableFK` (`CustAccount`),
  ADD KEY `DeliveryFK` (`DeliveryAddress`),
  ADD KEY `CollectFK` (`CollectAddress`);

--
-- Índices para tabela `deliveryordersitems`
--
ALTER TABLE `deliveryordersitems`
  ADD PRIMARY KEY (`RecId`),
  ADD KEY `DeliveryOrdersFK` (`DeliveryId`),
  ADD KEY `InventTableFK` (`ItemId`);

--
-- Índices para tabela `inventtable`
--
ALTER TABLE `inventtable`
  ADD PRIMARY KEY (`ItemId`);

--
-- Índices para tabela `logisticspostaladdress`
--
ALTER TABLE `logisticspostaladdress`
  ADD PRIMARY KEY (`LocationId`);

--
-- Índices para tabela `permissiongroup`
--
ALTER TABLE `permissiongroup`
  ADD PRIMARY KEY (`PermissionId`);

--
-- Índices para tabela `sysusers`
--
ALTER TABLE `sysusers`
  ADD PRIMARY KEY (`UserId`),
  ADD KEY `PermissionFK` (`PermissionId`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `custtable`
--
ALTER TABLE `custtable`
  MODIFY `CustAccount` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `deliverycompanytable`
--
ALTER TABLE `deliverycompanytable`
  MODIFY `DeliveryCompanyId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `deliveryorders`
--
ALTER TABLE `deliveryorders`
  MODIFY `DeliveryId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `deliveryordersitems`
--
ALTER TABLE `deliveryordersitems`
  MODIFY `RecId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `inventtable`
--
ALTER TABLE `inventtable`
  MODIFY `ItemId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `logisticspostaladdress`
--
ALTER TABLE `logisticspostaladdress`
  MODIFY `LocationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `permissiongroup`
--
ALTER TABLE `permissiongroup`
  MODIFY `PermissionId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `sysusers`
--
ALTER TABLE `sysusers`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `custlocations`
--
ALTER TABLE `custlocations`
  ADD CONSTRAINT `CustTableLocFK` FOREIGN KEY (`CustAccount`) REFERENCES `custtable` (`CustAccount`),
  ADD CONSTRAINT `LogisticsPostalAddressFK` FOREIGN KEY (`LocationId`) REFERENCES `logisticspostaladdress` (`LocationId`);

--
-- Limitadores para a tabela `deliverycompanytable`
--
ALTER TABLE `deliverycompanytable`
  ADD CONSTRAINT `SysUsersFK` FOREIGN KEY (`UserId`) REFERENCES `sysusers` (`UserId`);

--
-- Limitadores para a tabela `deliveryorders`
--
ALTER TABLE `deliveryorders`
  ADD CONSTRAINT `CollectFK` FOREIGN KEY (`CollectAddress`) REFERENCES `logisticspostaladdress` (`LocationId`),
  ADD CONSTRAINT `CustTableFK` FOREIGN KEY (`CustAccount`) REFERENCES `custtable` (`CustAccount`),
  ADD CONSTRAINT `DeliveryFK` FOREIGN KEY (`DeliveryAddress`) REFERENCES `logisticspostaladdress` (`LocationId`);

--
-- Limitadores para a tabela `deliveryordersitems`
--
ALTER TABLE `deliveryordersitems`
  ADD CONSTRAINT `DeliveryOrdersFK` FOREIGN KEY (`DeliveryId`) REFERENCES `deliveryorders` (`DeliveryId`),
  ADD CONSTRAINT `InventTableFK` FOREIGN KEY (`ItemId`) REFERENCES `inventtable` (`ItemId`);

--
-- Limitadores para a tabela `sysusers`
--
ALTER TABLE `sysusers`
  ADD CONSTRAINT `PermissionFK` FOREIGN KEY (`PermissionId`) REFERENCES `permissiongroup` (`PermissionId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
