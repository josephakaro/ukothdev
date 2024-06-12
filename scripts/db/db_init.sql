CREATE DATABASE IF NOT EXISTS ukothdev;
USE ukothdev;

CREATE TABLE IF NOT EXISTS subscriber(
    subs_id INT AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    PRIMARY KEY (subs_id)
)

CREATE TABLE IF NOT EXISTS contact(
    contact_id INT AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(50) NOT NULL,
    company VARCHAR(100) NOT NULL,
    project_overview TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (contact_id)
)

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `is_active` TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DROP TABLE newsletters;

CREATE USER 'ukothdev'@'localhost' IDENTIFIED BY 'Uk0thDev_SQL!987';

DROP USER 'ukothdev'@'';

GRANT ALL PRIVILEGES ON ukothdev.* TO 'ukothdev'@'localhost';
