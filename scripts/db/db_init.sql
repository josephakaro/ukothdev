CREATE DATABASE IF NOT EXISTS ukothdev;
USE ukothdev;

CREATE TABLE IF NOT EXISTS newletters(
    news_id INT AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (news_id)
)

CREATE USER 'ukothdev'@'%' IDENTIFIED BY 'Uk0thDev_SQL!987';

DROP USER 'ukothdev'@'localhost';

GRANT ALL PRIVILEGES on ukothdev.* To 'ukothdev'@'%';