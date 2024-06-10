CREATE DATABASE IF NOT EXISTS ukothdev;
USE ukothdev;

CREATE TABLE IF NOT EXISTS subscriber(
    subs_id INT AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    PRIMARY KEY (subs_id)
)

DROP TABLE newsletters;

CREATE USER 'ukothdev'@'localhost' IDENTIFIED BY 'Uk0thDev_SQL!987';

DROP USER 'ukothdev'@'';

GRANT ALL PRIVILEGES ON ukothdev.* TO 'ukothdev'@'localhost';
