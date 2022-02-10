CREATE DATABASE ampeca ; 
USE ampeca
CREATE TABLE user (id int AUTO_INCREMENT , email varchar(50) , password varchar(50), PRIMARY KEY (id)) ; 
CREATE TABLE  songs (id int AUTO_INCREMENT , src varchar(1000) , Name varchar(50) , ArtisteName varchar(50)  , Cover varchar(1000) , PRIMARY KEY(id)) ; 
CREATE TABLE  playlist(id int , songs JSON , PRIMARY KEY (id) ) ; 