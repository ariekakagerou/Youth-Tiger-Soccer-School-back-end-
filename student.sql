-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jan 2025 pada 13.56
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `soccer_school`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `student`
--

CREATE TABLE `student` (
  `reg_id_student` int(11) NOT NULL,
  `id_student` varchar(8) NOT NULL,
  `name` varchar(50) NOT NULL,
  `date_birth` date NOT NULL,
  `gender` char(1) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nohp` varchar(15) NOT NULL,
  `registration_date` date NOT NULL,
  `status` int(1) NOT NULL,
  `position` varchar(30) NOT NULL,
  `assigned_by_coach` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `student`
--

INSERT INTO `student` (`reg_id_student`, `id_student`, `name`, `date_birth`, `gender`, `photo`, `email`, `nohp`, `registration_date`, `status`, `position`, `assigned_by_coach`) VALUES
(1, 'YRA1222', 'Yaqdhan Rakha Assaid', '2013-05-10', 'L', '', 'mail.anggra@gmail.com', '', '2022-12-24', 1, '', 0),
(3, 'YRA60620', 'Rizky Pratama', '2009-09-05', 'L', 'new_photo_url.jpg', 'rizky.updated@example.com', '08123456789', '2024-12-30', 1, '', 0),
(4, 'YRA7005', 'Ahmad Fauzi', '2009-12-04', 'L', 'new_photo_url.jpg', 'Ahmad77@example.com', '081245367890', '2025-01-06', 1, '', 0),
(5, 'YRA18528', 'Hadi Wijaya', '2007-02-28', 'L', 'photo_url_8.jpg', 'hadi22@example.com', '081245367897', '2025-01-06', 1, '', 0),
(6, 'YRA14379', 'Joko Susilo', '2005-06-20', 'L', 'photo_url_10.jpg', 'joko00@example.com', '081245367899', '2025-01-06', 1, '', 0),
(7, 'YRA25191', 'Eko Prasetyo', '2010-07-18', 'L', 'photo_url_5.jpg', 'eko55@example.com', '081245367894', '2025-01-06', 1, '', 0),
(8, 'YRA70302', 'Mayu Watanabe', '2006-05-20', 'P', 'photo_url_6.jpg', 'mayu06@example.com', '081765432109', '2025-01-06', 1, '', 0),
(9, 'YRA92144', 'Yui Yokoyama', '2014-04-12', 'P', 'photo_url_1.jpg', 'yui14@example.com', '081234567890', '2025-01-06', 1, '', 0),
(10, 'YRA34459', 'Jurina Matsui', '2008-12-25', 'P', 'photo_url_5.jpg', 'jurina08@example.com', '081345678912', '2025-01-06', 1, '', 0),
(11, 'YRA41208', 'Haruna Kojima', '2012-09-18', 'P', 'photo_url_4.jpg', 'haruna12@example.com', '082134567890', '2025-01-06', 1, '', 0),
(12, 'YRA69064', 'Michelle Christo', '2008-06-17', 'P', 'photo_url_6.jpg', 'michelle08@example.com', '081765432109', '2025-01-06', 1, '', 0),
(13, 'YRA67698', 'Stephanie Pricillia Indarto Putri', '2011-04-04', 'P', 'photo_url_4.jpg', 'stephanie11@example.com', '082134567890', '2025-01-06', 1, '', 0),
(14, 'YRA11850', 'Kathrina Irene Indarto Putri', '2012-05-04', 'P', 'photo_url_4.jpg', 'kathrine10@example.com', '082134567890', '2025-01-06', 1, '', 0);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`reg_id_student`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `student`
--
ALTER TABLE `student`
  MODIFY `reg_id_student` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
