-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Lun 14 Janvier 2019 à 12:20
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projetweb`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `id` int(11) NOT NULL,
  `ecole` varchar(150) DEFAULT NULL,
  `date` date NOT NULL,
  `com` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `commentaires`
--

INSERT INTO `commentaires` (`id`, `ecole`, `date`, `com`) VALUES
(7, 'vide', '2019-01-14', 'commentaire'),
(6, 'vide', '2019-01-14', 'bonne ecole'),
(8, 'vide', '2019-01-14', 'usEHFHJEBFLJFEB');

-- --------------------------------------------------------

--
-- Structure de la table `etablissement`
--

CREATE TABLE `etablissement` (
  `nom` varchar(150) NOT NULL,
  `typef` varchar(75) NOT NULL,
  `domaine` varchar(50) DEFAULT NULL,
  `wilaya` varchar(25) NOT NULL,
  `commune` varchar(35) NOT NULL,
  `adresse` varchar(100) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `fax` varchar(50) DEFAULT NULL,
  `link` varchar(100) NOT NULL DEFAULT 'http://127.0.0.1/madrassa'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `etablissement`
--

INSERT INTO `etablissement` (`nom`, `typef`, `domaine`, `wilaya`, `commune`, `adresse`, `tel`, `fax`, `link`) VALUES
('Ecole Supérieure de Commerce', 'Formations universitaires', 'Commerce et finance', 'Oran', 'Es-Senia', '50 Rue des martyrs', '031 56 25 70', '031 56 30 50', 'http://127.0.0.1/madrassa2'),
('Ecole Supérieure d’Electronique', 'Formations universitaires', 'Electronique', 'Boumerdes', 'Boumerdes-centre', '3500 Rue de la liberté', '035 56 25 70', '035 56 30 50', 'http://127.0.0.1/madrassa'),
('Ecole Supérieure d’Informatique', 'Formations universitaires', 'Informatique', 'Alger', 'Oued Smar', '68 rue de la gare', '023 56 25 70', '023 56 30 50', 'http://127.0.0.1/madrassa'),
('Ecole Supérieure d’Agronomie', 'Formations universitaires', 'Agronomie', 'El-Oued', 'Djamaa', '30 Rue des dunes', '026 56 25 70', '026 56 30 50', 'http://127.0.0.1/madrassa'),
('Ecole Supérieure Vétérinaire', 'Formations universitaires', 'Vétérnaire', 'Tizi-ouzou', 'Freha', '10 Rue des oliviers', '025 56 25 70', '025 56 30 50', 'http://127.0.0.1/madrassa'),
('Institue Supérieure de commerce', 'Formations universitaires', 'Commerce et finance', 'Béjaia', 'Akbou', '20 Rue de la montagne', '032 56 25 70', '032 56 30 50', 'http://127.0.0.1/madrassa'),
('Institue d’hôtellerie et restauration', 'Formations professionnelles', 'Hôtellerie', 'Tizi-Ouzou', 'Es-Senia', '0 Rue des martyrs', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Institue des métiers de plomberie et chauffage', 'Formations professionnelles', 'Plomberie', 'Sétif', 'El-Eulma', '50 Rue de la liberté', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Institue de mécanique', 'Formations professionnelles', 'Mécanique', 'Blida', 'Soûmaa', '50 Rue de la gare', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Institue d’hygiène et sécurité', 'Formations professionnelles', 'Commerce et finance', 'Alger', 'Rouiba', '50 Rue des dunes', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Institue des métiers du bâtiments', 'Formations professionnelles', 'Bâtiment', 'Bechar', 'Saoura', '50 Rue des oliviers', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-Falah', 'Formations secondaires', '', 'Mostaganem', 'Mansoura', '50 Rue de la liberté', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-Nadjah', 'Formations secondaires', '', 'Constantine', 'Ibn-Badis', '50 Rue des martyrs', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole Les glycines', 'Formations secondaires', '', 'Alger', 'Chéraga', '50 Rue de la gare', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole Madrassati', 'Formations secondaires', '', 'Alger', 'Hussein-Dey', '50 Rue des oliviers', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-Fath', 'Formations secondaires', '', 'Tlemcen', 'Hennaya', '50 Rue des dunes', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole Madrassati', 'Formations moyennes', '', 'Alger', 'Hussein-Dey', '50 Rue de la gare', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-Nadjah', 'Formations moyennes', '', 'Constantine', 'Ibn-Badis', '50 Rue des oliviers', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole La réussite', 'Formations moyennes', '', 'Bechar', 'Béni Abbès', '50 Rue des dunes', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole Les écoliers', 'Formations moyennes', '', 'Oran', 'Ain-El-Turk', '50 Rue de la liberté', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-Moutafawikines', 'Formations moyennes', '', 'Chlef', 'Tenès', '50 Rue des martyrs', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-Nadjihine', 'Formations primaires', '', 'Bouira', 'Lakhdaria', '50 Rue des dunes', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole Madrassati', 'Formations primaires', '', 'Alger', 'Hussein-Dey', '50 Rue des oliviers', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-Nadjah', 'Formations primaires', '', 'Constantine', 'Ibn-Badis', '50 Rue de la liberté', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-oumma', 'Formations primaires', '', 'Tipaza', 'Cherchell', '50 Rue dses martyrs', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-Bayane', 'Formations primaires', '', 'Ghardaïa', 'El-Menia', '50 Rue de la gare', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole Les Poussins', 'Formations maternelles', '', 'Alger', 'Dar-El-Beida', '50 Rue de la liberté', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole Madrassati', 'Formations maternelles', '', 'Alger', 'Hussein-Dey', '50 Rue des martyrs', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa2'),
('Ecole El-Moustakbel', 'Formations maternelles', '', 'Sidi-Bel-Abbès', 'Sidi Brahim', '50 Rue de la gare', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-Nadjah', 'Formations maternelles', '', 'Constantine', 'Ibn-Badis', '50 Rue des oliviers', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa'),
('Ecole El-Oumma', 'Formations maternelles', '', 'Tipaza', 'Cherchell', '50 Rue des dunes', '021 56 25 70', '021 56 30 50 / 56 51 54', 'http://127.0.0.1/madrassa');

-- --------------------------------------------------------

--
-- Structure de la table `typeformation`
--

CREATE TABLE `typeformation` (
  `nom` varchar(75) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `typeformation`
--

INSERT INTO `typeformation` (`nom`) VALUES
('Formations maternelles'),
('Formations moyennes'),
('Formations primaires'),
('Formations professionnelles'),
('Formations secondaires'),
('Formations universitaires');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `name` varchar(30) NOT NULL,
  `pwd` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`name`, `pwd`) VALUES
('admin', 'admin');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ecole` (`ecole`);

--
-- Index pour la table `etablissement`
--
ALTER TABLE `etablissement`
  ADD PRIMARY KEY (`nom`,`typef`,`wilaya`,`commune`),
  ADD KEY `typef` (`typef`);

--
-- Index pour la table `typeformation`
--
ALTER TABLE `typeformation`
  ADD PRIMARY KEY (`nom`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`name`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
