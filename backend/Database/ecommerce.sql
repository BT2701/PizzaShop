-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.27-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for ecommerce
CREATE DATABASE IF NOT EXISTS `ecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `ecommerce`;

-- Dumping structure for table ecommerce.ctgiohang
CREATE TABLE IF NOT EXISTS `ctgiohang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `MaSP` int(11) NOT NULL DEFAULT 0,
  `SoLuong` int(11) NOT NULL DEFAULT 0,
  `MaGH` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ctgiohang_sanpham` (`MaSP`),
  KEY `FK_ctgiohang_giohang` (`MaGH`),
  CONSTRAINT `FK_ctgiohang_giohang` FOREIGN KEY (`MaGH`) REFERENCES `giohang` (`MaGH`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_ctgiohang_sanpham` FOREIGN KEY (`MaSP`) REFERENCES `sanpham` (`MaSP`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.ctgiohang: ~0 rows (approximately)

-- Dumping structure for table ecommerce.cthoadon
CREATE TABLE IF NOT EXISTS `cthoadon` (
  `MaHD` int(11) NOT NULL,
  `MaSP` int(11) NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `DonGia` int(11) NOT NULL,
  `ThanhTien` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `cthoadon_ibfk_1` (`MaHD`),
  KEY `FK_cthoadon_sanpham` (`MaSP`),
  CONSTRAINT `FK_cthoadon_sanpham` FOREIGN KEY (`MaSP`) REFERENCES `sanpham` (`MaSP`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `cthoadon_ibfk_1` FOREIGN KEY (`MaHD`) REFERENCES `hoadon` (`MaHD`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.cthoadon: ~99 rows (approximately)
INSERT INTO `cthoadon` (`MaHD`, `MaSP`, `SoLuong`, `DonGia`, `ThanhTien`, `id`) VALUES
	(18, 114, 2, 159000, 318000, 1),
	(18, 122, 3, 249000, 747000, 2),
	(18, 124, 6, 19000, 114000, 3),
	(18, 130, 2, 19000, 38000, 4),
	(18, 132, 2, 25000, 50000, 5),
	(19, 115, 2, 119000, 238000, 6),
	(19, 120, 1, 239000, 239000, 7),
	(19, 128, 4, 19000, 76000, 8),
	(19, 131, 5, 10000, 50000, 9),
	(20, 118, 1, 129000, 129000, 10),
	(20, 120, 2, 239000, 478000, 11),
	(20, 129, 5, 19000, 38000, 12),
	(20, 130, 5, 19000, 95000, 13),
	(20, 131, 10, 10000, 100000, 14),
	(21, 112, 3, 129000, 387000, 15),
	(21, 117, 2, 149000, 298000, 16),
	(21, 126, 10, 19000, 190000, 17),
	(21, 127, 3, 29000, 87000, 18),
	(21, 128, 15, 19000, 285000, 19),
	(21, 131, 6, 10000, 60000, 20),
	(22, 114, 5, 159000, 795000, 21),
	(22, 127, 10, 29000, 290000, 22),
	(22, 129, 6, 19000, 95000, 23),
	(22, 132, 3, 25000, 75000, 24),
	(23, 112, 3, 129000, 387000, 25),
	(23, 113, 1, 119000, 119000, 26),
	(23, 118, 1, 129000, 129000, 27),
	(23, 128, 6, 19000, 114000, 28),
	(23, 131, 5, 10000, 50000, 29),
	(23, 132, 2, 25000, 25000, 30),
	(24, 115, 1, 119000, 119000, 31),
	(24, 116, 1, 130000, 130000, 32),
	(24, 119, 1, 239000, 239000, 33),
	(24, 126, 6, 19000, 114000, 34),
	(24, 127, 3, 29000, 87000, 35),
	(24, 131, 7, 10000, 70000, 36),
	(24, 132, 4, 25000, 100000, 37),
	(25, 118, 1, 129000, 129000, 38),
	(25, 121, 1, 229000, 229000, 39),
	(25, 130, 4, 19000, 76000, 40),
	(25, 131, 5, 10000, 50000, 41),
	(25, 132, 3, 25000, 75000, 42),
	(26, 111, 3, 169000, 507000, 43),
	(26, 120, 3, 239000, 717000, 44),
	(26, 122, 2, 249000, 498000, 45),
	(26, 127, 4, 29000, 116000, 46),
	(27, 113, 1, 119000, 119000, 47),
	(27, 119, 1, 239000, 239000, 48),
	(27, 123, 1, 269000, 269000, 49),
	(27, 126, 1, 19000, 19000, 50),
	(27, 131, 1, 10000, 10000, 51),
	(28, 113, 10, 119000, 1190000, 52),
	(28, 116, 4, 130000, 520000, 53),
	(28, 119, 3, 239000, 717000, 54),
	(28, 132, 5, 25000, 125000, 55),
	(29, 114, 4, 159000, 636000, 56),
	(29, 115, 1, 119000, 119000, 57),
	(29, 116, 1, 130000, 130000, 58),
	(29, 131, 2, 10000, 20000, 59),
	(30, 116, 1, 130000, 130000, 60),
	(30, 117, 7, 149000, 1043000, 61),
	(30, 123, 10, 269000, 2690000, 62),
	(30, 125, 1, 29000, 29000, 63),
	(30, 127, 2, 29000, 29000, 64),
	(31, 111, 1, 169000, 169000, 65),
	(31, 115, 6, 119000, 595000, 66),
	(31, 117, 1, 149000, 149000, 67),
	(31, 118, 1, 129000, 129000, 68),
	(31, 130, 4, 19000, 76000, 69),
	(32, 120, 5, 239000, 1195000, 70),
	(32, 121, 4, 229000, 916000, 71),
	(33, 116, 1, 130000, 130000, 72),
	(33, 119, 30, 239000, 7170000, 73),
	(35, 113, 1, 119000, 119000, 74),
	(35, 117, 1, 149000, 149000, 75),
	(35, 131, 8, 10000, 70000, 76),
	(37, 116, 1, 130000, 130000, 77),
	(38, 111, 1, 169000, 169000, 78),
	(39, 111, 1, 169000, 169000, 79),
	(40, 112, 1, 129000, 129000, 80),
	(40, 114, 1, 159000, 159000, 81),
	(40, 119, 1, 239000, 239000, 82),
	(41, 137, 1, 84500, 84500, 83),
	(42, 120, 1, 239000, 239000, 84),
	(43, 115, 1, 119000, 119000, 85),
	(44, 111, 1, 169000, 169000, 86),
	(45, 120, 1, 239000, 239000, 87),
	(46, 112, 1, 129000, 129000, 88),
	(47, 118, 1, 129000, 129000, 89),
	(47, 119, 1, 239000, 239000, 90),
	(47, 120, 2, 239000, 239000, 91),
	(48, 117, 1, 149000, 149000, 92),
	(49, 116, 1, 130000, 130000, 93),
	(57, 119, 1, 239000, 239000, 115),
	(57, 131, 4, 10000, 40000, 116),
	(58, 132, 5, 25000, 125000, 117),
	(59, 128, 5, 19000, 95000, 118),
	(59, 131, 5, 10000, 50000, 119),
	(59, 119, 5, 239000, 1195000, 120);

-- Dumping structure for table ecommerce.ctphieunhap
CREATE TABLE IF NOT EXISTS `ctphieunhap` (
  `MaPN` int(11) NOT NULL,
  `MaSP` int(11) NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `DonGia` int(11) NOT NULL,
  `ThanhTien` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `FK_ctphieunhap_phieunhap` (`MaPN`),
  KEY `FK_ctphieunhap_sanpham` (`MaSP`),
  CONSTRAINT `FK_ctphieunhap_phieunhap` FOREIGN KEY (`MaPN`) REFERENCES `phieunhap` (`MaPN`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_ctphieunhap_sanpham` FOREIGN KEY (`MaSP`) REFERENCES `sanpham` (`MaSP`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.ctphieunhap: ~16 rows (approximately)
INSERT INTO `ctphieunhap` (`MaPN`, `MaSP`, `SoLuong`, `DonGia`, `ThanhTien`, `id`) VALUES
	(4, 128, 100, 10000, 1000000, 1),
	(4, 129, 3, 9000, 27000, 2),
	(5, 124, 6, 10000, 60000, 3),
	(5, 125, 3, 15000, 45000, 4),
	(5, 126, 7, 10000, 70000, 5),
	(5, 127, 2, 15000, 30000, 6),
	(5, 130, 3, 9000, 27000, 7),
	(5, 131, 9, 4000, 36000, 8),
	(7, 126, 9, 10000, 90000, 9),
	(8, 124, 30, 10000, 300000, 10),
	(8, 126, 50, 10000, 500000, 11),
	(8, 129, 30, 9000, 270000, 12),
	(9, 135, 100, 10000, 1000000, 13),
	(10, 136, 200, 23000, 4600000, 14),
	(10, 137, 80, 84500, 6760000, 15),
	(11, 132, 108, 70, 7560, 16);

-- Dumping structure for table ecommerce.giamgia
CREATE TABLE IF NOT EXISTS `giamgia` (
  `MaGiam` int(11) NOT NULL AUTO_INCREMENT,
  `TenGiamGia` text NOT NULL,
  `PhanTramGiam` int(11) NOT NULL,
  `DieuKien` int(11) NOT NULL,
  `NgayBD` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `NgayKT` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`MaGiam`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.giamgia: ~4 rows (approximately)
INSERT INTO `giamgia` (`MaGiam`, `TenGiamGia`, `PhanTramGiam`, `DieuKien`, `NgayBD`, `NgayKT`) VALUES
	(1, 'Không giảm giá', 0, 0, '2019-12-31 17:00:00', '0000-00-00 00:00:00'),
	(2, 'Giảm 20% đơn hàng từ 150.000đ', 20, 150000, '2021-04-21 17:00:00', '2021-05-12 17:00:00'),
	(4, 'Giảm 10% đơn hàng từ 80.000đ', 10, 80000, '2021-03-25 17:00:00', '2021-05-30 17:00:00'),
	(6, '30/04-01/05 giảm 30% đơn hàng từ 300.000đ', 30, 300000, '2021-04-19 17:00:00', '2021-05-07 17:00:00');

-- Dumping structure for table ecommerce.giohang
CREATE TABLE IF NOT EXISTS `giohang` (
  `MaGH` int(11) NOT NULL AUTO_INCREMENT,
  `MaKH` int(11) NOT NULL DEFAULT 0,
  `TongTien` int(11) NOT NULL,
  PRIMARY KEY (`MaGH`) USING BTREE,
  KEY `FK_giohang_khachhang` (`MaKH`),
  CONSTRAINT `FK_giohang_khachhang` FOREIGN KEY (`MaKH`) REFERENCES `khachhang` (`MaKH`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.giohang: ~1 rows (approximately)
INSERT INTO `giohang` (`MaGH`, `MaKH`, `TongTien`) VALUES
	(1, 14, 1000000);

-- Dumping structure for table ecommerce.goiy
CREATE TABLE IF NOT EXISTS `goiy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `NoiDung` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.goiy: ~0 rows (approximately)

-- Dumping structure for table ecommerce.hoadon
CREATE TABLE IF NOT EXISTS `hoadon` (
  `MaHD` int(11) NOT NULL AUTO_INCREMENT,
  `MaKH` int(11) NOT NULL,
  `MaNV` int(11) DEFAULT NULL,
  `NgayLap` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `TongTien` int(11) NOT NULL,
  `GhiChu` text NOT NULL,
  `PhanTramGiam` int(11) DEFAULT NULL,
  `TinhTrang` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`MaHD`),
  KEY `hoadon_ibfk_1` (`MaNV`),
  KEY `hoadon_ibfk_2` (`MaKH`),
  CONSTRAINT `hoadon_ibfk_1` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `hoadon_ibfk_2` FOREIGN KEY (`MaKH`) REFERENCES `khachhang` (`MaKH`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.hoadon: ~33 rows (approximately)
INSERT INTO `hoadon` (`MaHD`, `MaKH`, `MaNV`, `NgayLap`, `TongTien`, `GhiChu`, `PhanTramGiam`, `TinhTrang`) VALUES
	(18, 4, 3, '2024-07-13 10:07:14', 1013600, 'Đã thanh toán', NULL, 1),
	(19, 1, 1, '2024-07-13 10:07:15', 482400, 'Đã thanh toán', NULL, 1),
	(20, 2, 1, '2024-07-13 10:07:16', 840000, 'Đã thanh toán', NULL, 1),
	(21, 3, 2, '2024-07-13 10:07:17', 1045600, 'Đã thanh toán', NULL, 1),
	(22, 1, 1, '2024-07-13 10:07:17', 1004000, 'Đã thanh toán', NULL, 1),
	(23, 7, 3, '2024-07-13 10:07:18', 576800, 'Đã thanh toán', NULL, 1),
	(24, 7, 2, '2024-07-13 10:07:19', 601300, 'Đã thanh toán', NULL, 1),
	(25, 2, 2, '2024-07-13 10:07:20', 391300, 'Đã thanh toán', NULL, 1),
	(26, 8, 4, '2024-07-13 10:07:21', 1286600, 'Đã thanh toán', NULL, 1),
	(27, 8, 3, '2024-07-13 10:07:23', 590400, 'Đã thanh toán', NULL, 2),
	(28, 7, 4, '2024-07-13 10:07:24', 2041600, 'Đã thanh toán', NULL, 2),
	(29, 9, 2, '2024-07-13 10:07:25', 633500, 'Đã thanh toán', NULL, 2),
	(30, 10, 4, '2024-07-13 10:07:26', 3136800, 'Đã thanh toán', NULL, 2),
	(31, 11, 4, '2024-07-13 10:07:29', 782600, 'Đã thanh toán', NULL, 2),
	(32, 11, 0, '2024-07-13 10:07:30', 1477700, 'Đã thanh toán', NULL, 1),
	(33, 9, 0, '2024-07-13 10:07:31', 5110000, 'Đã thanh toán', NULL, 2),
	(35, 3, 0, '2024-07-13 10:07:32', 304200, 'Đã thanh toán', NULL, 1),
	(37, 2, 0, '2024-07-13 10:07:33', 117000, 'Đã thanh toán', NULL, 2),
	(38, 1, 0, '2024-07-13 10:07:33', 169000, 'Đã thanh toán', NULL, 1),
	(39, 1, 0, '2024-07-13 10:07:34', 169000, 'Đã thanh toán', NULL, 1),
	(40, 14, 0, '2024-07-13 10:07:35', 527000, 'Đã thanh toán', NULL, 1),
	(41, 14, 0, '2024-07-13 10:07:36', 84500, 'Đã thanh toán', NULL, 2),
	(42, 1, 0, '2024-07-13 10:07:37', 239000, 'Đã thanh toán', NULL, 1),
	(43, 1, 0, '2024-07-13 10:07:38', 119000, 'Đã thanh toán', NULL, 1),
	(44, 1, 0, '2024-07-13 10:07:39', 169000, 'Đã thanh toán', NULL, 2),
	(45, 1, 0, '2024-07-13 10:07:40', 239000, 'Đã thanh toán', NULL, 1),
	(46, 1, 0, '2024-07-13 10:07:41', 129000, 'Đã thanh toán', NULL, 1),
	(47, 1, 0, '2024-07-13 10:07:42', 607000, 'Đã thanh toán', NULL, 2),
	(48, 1, 0, '2024-07-13 10:07:43', 149000, 'Đã thanh toán', NULL, 1),
	(49, 1, 0, '2024-07-13 10:07:44', 130000, 'Đã thanh toán', NULL, 1),
	(57, 14, NULL, '2024-08-07 12:49:11', 279000, 'Đã thanh toán', NULL, 1),
	(58, 14, NULL, '2024-08-07 12:54:16', 125000, 'Đã thanh toán', NULL, 1),
	(59, 14, NULL, '2024-08-07 12:54:55', 1340000, 'Đã thanh toán', NULL, 1);

-- Dumping structure for table ecommerce.khachhang
CREATE TABLE IF NOT EXISTS `khachhang` (
  `MaKH` int(11) NOT NULL AUTO_INCREMENT,
  `Ho` varchar(255) NOT NULL,
  `Ten` varchar(255) NOT NULL,
  `GioiTinh` varchar(3) DEFAULT NULL,
  `TongChiTieu` int(11) DEFAULT 0,
  `TinhTrang` int(11) NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `sdt` varchar(50) DEFAULT NULL,
  `avt` varchar(255) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MaKH`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.khachhang: ~15 rows (approximately)
INSERT INTO `khachhang` (`MaKH`, `Ho`, `Ten`, `GioiTinh`, `TongChiTieu`, `TinhTrang`, `Email`, `sdt`, `avt`, `birth`, `address`) VALUES
	(1, 'Nguyễn Văn', 'An', 'Nam', 3605400, 1, 'abc@gmail.com', '1234567890', NULL, NULL, NULL),
	(2, 'Trần Ngọc', 'Bình', 'Nữ', 1497300, 1, NULL, NULL, NULL, NULL, NULL),
	(3, 'Lê Thị', 'Giải', 'Nữ', 1468800, 1, NULL, NULL, NULL, NULL, NULL),
	(4, 'Hà Thanh', 'Thoát', 'Nam', 1013600, 1, NULL, NULL, NULL, NULL, NULL),
	(7, 'Trịnh Thị', 'Yên', 'Nữ', 3219700, 1, NULL, NULL, NULL, NULL, NULL),
	(8, 'Trương Đình', 'Vui', 'Nam', 1877000, 1, NULL, NULL, NULL, NULL, NULL),
	(9, 'Lại Thị Ngọc', 'Miền', 'Nữ', 5743500, 1, NULL, NULL, NULL, NULL, NULL),
	(10, 'Trần Quang', 'Cực', 'Nam', 3136800, 1, NULL, NULL, NULL, NULL, NULL),
	(11, 'Nguyễn Ngọc', 'Lạc', 'Nam', 2260300, 1, NULL, NULL, NULL, NULL, NULL),
	(14, 'BT', 'Truong', 'Nam', 0, 1, 'bt@gmail.com', '0386094783', 'BT.png', '2003-01-28', 'Thủ Đức, TP Hồ Chí Minh'),
	(22, 'Nguyễn Văn ', 'C', NULL, 0, 1, 'truongnopro1111@gmail.com', '1234567111', NULL, NULL, NULL),
	(23, 'Lê Thị ', 'D', NULL, 0, 1, 'truongnopro1111@gmail.com', '1234567111', NULL, NULL, NULL),
	(24, 'Trần Tấn ', 'E', NULL, 0, 1, 'truongnopro1111@gmail.com', '1234567111', NULL, NULL, NULL),
	(25, 'Nguyễn Thanh ', 'Tùng', NULL, 0, 1, 'truongnopro1111@gmail.com', '1234567111', NULL, NULL, NULL),
	(26, 'Cristiano ', 'Ronaldo', NULL, 0, 1, 'abc@gmail.com', '0386094783', NULL, NULL, NULL);

-- Dumping structure for table ecommerce.loai
CREATE TABLE IF NOT EXISTS `loai` (
  `MaLoai` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoai` text NOT NULL,
  PRIMARY KEY (`MaLoai`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.loai: ~3 rows (approximately)
INSERT INTO `loai` (`MaLoai`, `TenLoai`) VALUES
	(1, 'Pizza'),
	(2, 'Nước uống'),
	(3, 'Nguyên liệu');

-- Dumping structure for table ecommerce.nhacungcap
CREATE TABLE IF NOT EXISTS `nhacungcap` (
  `MaNCC` int(11) NOT NULL AUTO_INCREMENT,
  `TenNCC` varchar(255) NOT NULL,
  `DiaChi` varchar(255) NOT NULL,
  `DienThoai` text NOT NULL,
  PRIMARY KEY (`MaNCC`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.nhacungcap: ~3 rows (approximately)
INSERT INTO `nhacungcap` (`MaNCC`, `TenNCC`, `DiaChi`, `DienThoai`) VALUES
	(1, 'Bột mì Khánh Toàn', '273 An Dương Vương, phường 3, quận 5, TP.HCM', '0396527908'),
	(2, 'Công ty giải khát Tường Vy', '12/49/2 Võ Văn Kiệt, P. Cô Giang, Q1', '0902669733'),
	(5, 'Nguyên liệu bánh Việt Hoàng', '492 Xô Viết Nghệ Tĩnh, P.25, Q. Bình Thạnh', '0397682193');

-- Dumping structure for table ecommerce.nhanvien
CREATE TABLE IF NOT EXISTS `nhanvien` (
  `MaNV` int(11) NOT NULL AUTO_INCREMENT,
  `Ho` varchar(255) NOT NULL,
  `Ten` varchar(255) NOT NULL,
  `GioiTinh` varchar(3) NOT NULL,
  `ChucVu` varchar(255) NOT NULL,
  PRIMARY KEY (`MaNV`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.nhanvien: ~10 rows (approximately)
INSERT INTO `nhanvien` (`MaNV`, `Ho`, `Ten`, `GioiTinh`, `ChucVu`) VALUES
	(0, 'Admin', '', '', 'Admin'),
	(1, 'Sau Đại', 'Phát', 'Nam', 'Quản Lý'),
	(2, 'Trần Quang', 'Vinh', 'Nam', 'Quản Lý'),
	(3, 'Trần Hữu', 'Khương', 'Nam', 'Quản Lý'),
	(4, 'Nhữ Quốc Anh', 'Tài', 'Nam', 'Nhân Viên'),
	(12, 'Trịnh Thu', 'Huyền', 'Nữ', 'Nhân Viên'),
	(13, 'Nguyễn Ngọc Mai', 'Linh', 'Nữ', 'Nhân Viên'),
	(14, 'Hà Văn', 'Hùng', 'Nam', 'Nhân Viên'),
	(15, 'Lê Thị Thuý', 'Diễm', 'Nữ', 'Quản Lý'),
	(17, 'Nguyễn Văn', 'A', 'Nam', 'admin');

-- Dumping structure for table ecommerce.phanquyen
CREATE TABLE IF NOT EXISTS `phanquyen` (
  `Quyen` int(11) NOT NULL AUTO_INCREMENT,
  `TenQuyen` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Quyen`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.phanquyen: ~2 rows (approximately)
INSERT INTO `phanquyen` (`Quyen`, `TenQuyen`) VALUES
	(1, 'customer'),
	(2, 'staff');

-- Dumping structure for table ecommerce.phieunhap
CREATE TABLE IF NOT EXISTS `phieunhap` (
  `MaPN` int(11) NOT NULL AUTO_INCREMENT,
  `MaNCC` int(11) NOT NULL,
  `MaNV` int(11) NOT NULL,
  `NgayLap` date NOT NULL,
  `TongTien` int(11) NOT NULL,
  PRIMARY KEY (`MaPN`),
  KEY `phieunhap_ibfk_1` (`MaNCC`),
  KEY `phieunhap_ibfk_2` (`MaNV`),
  CONSTRAINT `phieunhap_ibfk_1` FOREIGN KEY (`MaNCC`) REFERENCES `nhacungcap` (`MaNCC`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `phieunhap_ibfk_2` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.phieunhap: ~7 rows (approximately)
INSERT INTO `phieunhap` (`MaPN`, `MaNCC`, `MaNV`, `NgayLap`, `TongTien`) VALUES
	(4, 2, 0, '2021-04-19', 1027000),
	(5, 2, 0, '2021-04-23', 268000),
	(7, 2, 0, '2021-04-26', 90000),
	(8, 2, 0, '2021-05-02', 1070000),
	(9, 1, 0, '2021-05-04', 1000000),
	(10, 5, 0, '2021-05-07', 11360000),
	(11, 2, 2, '2023-04-04', 7560);

-- Dumping structure for table ecommerce.sanpham
CREATE TABLE IF NOT EXISTS `sanpham` (
  `MaSP` int(11) NOT NULL AUTO_INCREMENT,
  `TenSP` varchar(255) NOT NULL,
  `MaLoai` int(11) NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `DonViTinh` varchar(255) NOT NULL,
  `HinhAnh` varchar(255) NOT NULL,
  `DonGia` int(11) NOT NULL,
  PRIMARY KEY (`MaSP`),
  KEY `sanpham_ibfk_1` (`MaLoai`),
  CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`MaLoai`) REFERENCES `loai` (`MaLoai`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=146 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Bang San Pham';

-- Dumping data for table ecommerce.sanpham: ~26 rows (approximately)
INSERT INTO `sanpham` (`MaSP`, `TenSP`, `MaLoai`, `SoLuong`, `DonViTinh`, `HinhAnh`, `DonGia`) VALUES
	(111, 'Pizza Hải Sản Pesto Xanh', 1, 28, 'Cái', 'pizza0.png', 169000),
	(112, 'Pizza Hải Sản Nhiệt Đới', 1, 37, 'Cái', 'pizza1.png', 129000),
	(113, 'Pizza Hải Sản Cocktail', 1, 34, 'Cái', 'pizza2.png', 119000),
	(114, 'Pizza Tôm Cocktail', 1, 35, 'Cái', 'pizza3.png', 159000),
	(115, 'Pizza Aloha', 1, 37, 'Cái', 'pizza4.png', 119000),
	(116, 'Pizza Thịt Xông Khói', 1, 38, 'Cái', 'pizza5.png', 130000),
	(117, 'Pizza Thịt Nguội', 1, 33, 'Cái', 'pizza6.png', 149000),
	(118, 'Pizza Gà Nướng 3 Vị', 1, 33, 'Cái', 'pizza7.png', 129000),
	(119, 'Pizza hải sản Pesto gấp đôi nhân', 1, 0, 'Cái', 'pizza8.jpg', 239000),
	(120, 'Pizza gấp đôi nhân phủ cơn lốc hải sản', 1, 19, 'Cái', 'pizza9.jpg', 239000),
	(121, 'Pizza gấp đôi nhân phủ hải sản xốt tiêu đen', 1, 38, 'Cái', 'pizza10.jpg', 229000),
	(122, 'Pizza bò nướng tiêu đen', 1, 43, 'Cái', 'pizza11.jpg', 249000),
	(123, 'Pizza cá ngừ thanh cua', 1, 33, 'Cái', 'pizza12.jpg', 269000),
	(124, 'Pepsi lon 330ml', 2, 150, 'Lon', 'douong0.jpeg', 19000),
	(125, 'Pepsi chai 1.5l', 2, 249, 'Chai', 'douong1.jpeg', 29000),
	(126, '7Up lon 330ml', 2, 145, 'Lon', 'douong2.jpeg', 19000),
	(127, '7Up chai 1.5l', 2, 110, 'Chai', 'douong3.jpeg', 29000),
	(128, 'Pepsi no calories 330ml', 2, 180, 'Lon', 'douong4.jpg', 19000),
	(129, 'Mirinda cam 330ml', 2, 100, 'Lon', 'douong5.jpg', 19000),
	(130, 'Mirinda kem soda 330ml', 2, 80, 'Lon', 'douong6.jpg', 19000),
	(131, 'Nước suối Aquafina', 2, 33, 'Chai', 'douong7.jpg', 10000),
	(132, 'Trà sữa trà đen', 2, 103, 'Ly', 'douong8.jpg', 25000),
	(135, 'Bột mì Meizan 500g', 3, 100, 'Gói', 'botmy.jpg', 10000),
	(136, 'Men nở Mauripan 50g*5', 3, 200, 'Hộp', 'menno.webp', 23000),
	(137, 'Dầu olive Olivoilà 250ml', 3, 0, 'Chai', 'dauoliu.webp', 84500),
	(145, 'Pizza Hải Sản Nhiệt Đới', 1, 0, 'Cái', 'pizza1.png', 129000);

-- Dumping structure for table ecommerce.taikhoan
CREATE TABLE IF NOT EXISTS `taikhoan` (
  `MaNV` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `MatKhau` varchar(255) NOT NULL,
  `Quyen` int(11) NOT NULL DEFAULT 1,
  `TrangThai` int(11) NOT NULL,
  `MaKH` int(11) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_taikhoan_nhanvien` (`MaNV`),
  KEY `FK_taikhoan_khachhang` (`MaKH`),
  KEY `FK_taikhoan_phanquyen` (`Quyen`),
  CONSTRAINT `FK_taikhoan_khachhang` FOREIGN KEY (`MaKH`) REFERENCES `khachhang` (`MaKH`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_taikhoan_nhanvien` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_taikhoan_phanquyen` FOREIGN KEY (`Quyen`) REFERENCES `phanquyen` (`Quyen`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.taikhoan: ~8 rows (approximately)
INSERT INTO `taikhoan` (`MaNV`, `id`, `MatKhau`, `Quyen`, `TrangThai`, `MaKH`, `username`) VALUES
	(1, 39, '12345678', 2, 1, NULL, 'NV01'),
	(NULL, 40, '12345678', 1, 1, 14, 'KH01'),
	(NULL, 42, '12345678', 1, 1, 1, 'KH02'),
	(NULL, 47, '1234567', 1, 1, 22, 'KH22'),
	(NULL, 48, '1234567', 1, 1, 23, 'KH23'),
	(NULL, 49, '1234567', 1, 1, 24, 'KH24'),
	(NULL, 50, '12345678', 1, 1, 25, 'KH25'),
	(NULL, 51, '12345678', 1, 1, 26, 'KH26');

-- Dumping structure for table ecommerce.tinnhan
CREATE TABLE IF NOT EXISTS `tinnhan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `NguoiGui` int(11) NOT NULL DEFAULT 0,
  `NguoiNhan` int(11) NOT NULL DEFAULT 0,
  `NoiDung` varchar(255) NOT NULL DEFAULT '0',
  `TrangThai` int(11) NOT NULL DEFAULT 0,
  `ThoiGian` timestamp NOT NULL DEFAULT current_timestamp(),
  `LoaiNguoiGui` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table ecommerce.tinnhan: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
