DROP DATABASE IF EXISTS ampeca;
CREATE DATABASE ampeca ; 
USE ampeca
CREATE TABLE user (id int AUTO_INCREMENT ,username varchar (50), email varchar(50) , password varchar(225),last_login DATE,UNIQUE KEY email (email), PRIMARY KEY (id)) ; 
CREATE TABLE  songs (id int AUTO_INCREMENT , src varchar(1000) , Name varchar(50) , ArtisteName varchar(50)  , Cover varchar(1000) , PRIMARY KEY(id)) ; 
CREATE TABLE  playlist(id int , songs JSON ,name varchar(50), PRIMARY KEY (id) )ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 




-- ///   mysql -u root -p <server/DataBase/Schema.sql;   ///