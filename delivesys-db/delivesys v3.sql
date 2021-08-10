-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 05/08/2021 às 03:47
-- Versão do servidor: 10.4.19-MariaDB
-- Versão do PHP: 7.4.20

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
-- Estrutura para tabela `custlocations`
--

CREATE TABLE `custlocations` (
  `CustAccount` int(10) NOT NULL,
  `LocationId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `custtable`
--

CREATE TABLE `custtable` (
  `CustAccount` int(10) NOT NULL,
  `CpfCnpj` varchar(15) NOT NULL,
  `CustName` varchar(20) NOT NULL,
  `BirthDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `custtable`
--

INSERT INTO `custtable` (`CustAccount`, `CpfCnpj`, `CustName`, `BirthDate`) VALUES
(2, '03680322054', 'Cliente só confiakk', '1998-05-05'),
(3, '08800021055', 'Juaniscleiton', '1998-07-05');

-- --------------------------------------------------------

--
-- Estrutura para tabela `deliverycompanytable`
--

CREATE TABLE `deliverycompanytable` (
  `DeliveryCompanyId` int(10) NOT NULL,
  `CpfCnpj` varchar(15) NOT NULL,
  `UserId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `deliveryorders`
--

CREATE TABLE `deliveryorders` (
  `DeliveryId` int(10) NOT NULL,
  `CustAccount` int(10) NOT NULL,
  `DeliveryAddress` int(10) NOT NULL,
  `CreatedDateTime` datetime NOT NULL DEFAULT current_timestamp(),
  `CollectDateTime` datetime NOT NULL,
  `DeliveryDateTime` datetime NOT NULL,
  `DeliveryStatus` int(2) NOT NULL,
  `FreightValue` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `deliveryorders`
--

INSERT INTO `deliveryorders` (`DeliveryId`, `CustAccount`, `DeliveryAddress`, `CreatedDateTime`, `CollectDateTime`, `DeliveryDateTime`, `DeliveryStatus`, `FreightValue`) VALUES
(4, 2, 9, '2021-08-05 01:43:45', '2021-05-21 00:00:00', '2021-05-21 00:00:00', 1, 78),
(5, 2, 10, '2021-08-05 01:44:19', '2021-05-21 00:00:00', '2021-05-21 00:00:00', 1, 78);

-- --------------------------------------------------------

--
-- Estrutura para tabela `deliveryordersitems`
--

CREATE TABLE `deliveryordersitems` (
  `RecId` int(10) NOT NULL,
  `DeliveryId` int(10) NOT NULL,
  `ItemId` int(10) NOT NULL,
  `Quantity` int(10) NOT NULL,
  `ValueAmount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `deliveryordersitems`
--

INSERT INTO `deliveryordersitems` (`RecId`, `DeliveryId`, `ItemId`, `Quantity`, `ValueAmount`) VALUES
(2, 4, 1, 2, 32),
(3, 5, 1, 2, 32);

-- --------------------------------------------------------

--
-- Estrutura para tabela `inventtable`
--

CREATE TABLE `inventtable` (
  `ItemId` int(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `ValueAmount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `inventtable`
--

INSERT INTO `inventtable` (`ItemId`, `Name`, `ValueAmount`) VALUES
(1, 'Mouse', 12);

-- --------------------------------------------------------

--
-- Estrutura para tabela `logisticspostaladdress`
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
-- Despejando dados para a tabela `logisticspostaladdress`
--

INSERT INTO `logisticspostaladdress` (`LocationId`, `ZipCode`, `Street`, `State`, `City`, `Country`, `StreetNumber`) VALUES
(1, 95180000, 'Test', 'RS', 'Farroupilha', 'Bra', 100),
(9, 95170320, 'Rua teste', 'RS', 'Farroupilha', 'BR', 240),
(10, 95170320, 'Rua teste', 'RS', 'Farroupilha', 'BR', 240);

-- --------------------------------------------------------

--
-- Estrutura para tabela `permissiongroup`
--

CREATE TABLE `permissiongroup` (
  `PermissionId` int(10) NOT NULL,
  `PermissionType` int(5) NOT NULL,
  `Description` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `permissiongroup`
--

INSERT INTO `permissiongroup` (`PermissionId`, `PermissionType`, `Description`) VALUES
(1, 1, 'Administrator'),
(2, 2, 'Deliveryman');

-- --------------------------------------------------------

--
-- Estrutura para tabela `sysusers`
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
-- Despejando dados para a tabela `sysusers`
--

INSERT INTO `sysusers` (`UserId`, `PermissionId`, `FirstName`, `LastName`, `Username`, `Password`) VALUES
(1, 1, 'Lucas', 'Pellegrini', 'admin', '$2b$08$DbX5VQydXazjUV3yTZCZpels2zMjsurC5NKskt/PPAmKaMlrpq4eC');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `custlocations`
--
ALTER TABLE `custlocations`
  ADD PRIMARY KEY (`CustAccount`,`LocationId`),
  ADD KEY `LogisticsPostalAddressFK` (`LocationId`);

--
-- Índices de tabela `custtable`
--
ALTER TABLE `custtable`
  ADD PRIMARY KEY (`CustAccount`);

--
-- Índices de tabela `deliverycompanytable`
--
ALTER TABLE `deliverycompanytable`
  ADD PRIMARY KEY (`DeliveryCompanyId`),
  ADD KEY `SysUsersFK` (`UserId`);

--
-- Índices de tabela `deliveryorders`
--
ALTER TABLE `deliveryorders`
  ADD PRIMARY KEY (`DeliveryId`),
  ADD KEY `CustTableFK` (`CustAccount`),
  ADD KEY `DeliveryFK` (`DeliveryAddress`);

--
-- Índices de tabela `deliveryordersitems`
--
ALTER TABLE `deliveryordersitems`
  ADD PRIMARY KEY (`RecId`),
  ADD KEY `DeliveryOrdersFK` (`DeliveryId`),
  ADD KEY `InventTableFK` (`ItemId`);

--
-- Índices de tabela `inventtable`
--
ALTER TABLE `inventtable`
  ADD PRIMARY KEY (`ItemId`);

--
-- Índices de tabela `logisticspostaladdress`
--
ALTER TABLE `logisticspostaladdress`
  ADD PRIMARY KEY (`LocationId`);

--
-- Índices de tabela `permissiongroup`
--
ALTER TABLE `permissiongroup`
  ADD PRIMARY KEY (`PermissionId`);

--
-- Índices de tabela `sysusers`
--
ALTER TABLE `sysusers`
  ADD PRIMARY KEY (`UserId`),
  ADD KEY `PermissionFK` (`PermissionId`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `custtable`
--
ALTER TABLE `custtable`
  MODIFY `CustAccount` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `deliverycompanytable`
--
ALTER TABLE `deliverycompanytable`
  MODIFY `DeliveryCompanyId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `deliveryorders`
--
ALTER TABLE `deliveryorders`
  MODIFY `DeliveryId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `deliveryordersitems`
--
ALTER TABLE `deliveryordersitems`
  MODIFY `RecId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `inventtable`
--
ALTER TABLE `inventtable`
  MODIFY `ItemId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `logisticspostaladdress`
--
ALTER TABLE `logisticspostaladdress`
  MODIFY `LocationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `permissiongroup`
--
ALTER TABLE `permissiongroup`
  MODIFY `PermissionId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `sysusers`
--
ALTER TABLE `sysusers`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `custlocations`
--
ALTER TABLE `custlocations`
  ADD CONSTRAINT `CustTableLocFK` FOREIGN KEY (`CustAccount`) REFERENCES `custtable` (`CustAccount`),
  ADD CONSTRAINT `LogisticsPostalAddressFK` FOREIGN KEY (`LocationId`) REFERENCES `logisticspostaladdress` (`LocationId`);

--
-- Restrições para tabelas `deliverycompanytable`
--
ALTER TABLE `deliverycompanytable`
  ADD CONSTRAINT `SysUsersFK` FOREIGN KEY (`UserId`) REFERENCES `sysusers` (`UserId`);

--
-- Restrições para tabelas `deliveryorders`
--
ALTER TABLE `deliveryorders`
  ADD CONSTRAINT `CustTableFK` FOREIGN KEY (`CustAccount`) REFERENCES `custtable` (`CustAccount`) ON DELETE CASCADE,
  ADD CONSTRAINT `DeliveryFK` FOREIGN KEY (`DeliveryAddress`) REFERENCES `logisticspostaladdress` (`LocationId`) ON DELETE CASCADE;

--
-- Restrições para tabelas `deliveryordersitems`
--
ALTER TABLE `deliveryordersitems`
  ADD CONSTRAINT `DeliveryOrdersFK` FOREIGN KEY (`DeliveryId`) REFERENCES `deliveryorders` (`DeliveryId`) ON DELETE CASCADE,
  ADD CONSTRAINT `InventTableFK` FOREIGN KEY (`ItemId`) REFERENCES `inventtable` (`ItemId`) ON DELETE CASCADE;

--
-- Restrições para tabelas `sysusers`
--
ALTER TABLE `sysusers`
  ADD CONSTRAINT `PermissionFK` FOREIGN KEY (`PermissionId`) REFERENCES `permissiongroup` (`PermissionId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
