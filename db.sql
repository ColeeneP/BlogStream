CREATE DATABASE IF NOT EXISTS blogdb;
USE blogdb;

CREATE TABLE IF NOT EXISTS tag (
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS article (
    id INT NOT NULL AUTO_INCREMENT,
    id_user INT NOT NULL,
    date DATE,
    title VARCHAR(50) NOT NULL,
    content LONGTEXT NOT NULL,
    id_credits INT
);

CREATE TABLE IF NOT EXISTS article_tag (
    id_article INT NOT NULL,
    id_tag INT NOT NULL,
    PRIMARY KEY (id_article, id_tag)
);

CREATE TABLE IF NOT EXISTS credits (
    id INT NOT NULL AUTO_INCREMENT,
    content TEXT
);

CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    pseudo VARCHAR(35),
    email VARCHAR(255),
    password VARCHAR(255)
);

ALTER TABLE article
ADD CONTRAINT FK_User
FOREIGN KEY (id_user) REFERENCES User(id);

ALTER TABLE article
ADD CONTRAINT FK_Credits
FOREIGN KEY (id_credits) REFERENCES Credits(id);

ALTER TABLE article_tag
ADD CONTRAINT FK_Article
FOREIGN KEY (id_article) REFERENCES Article(id);

ALTER TABLE article_tag
ADD CONTRAINT FK_Tag
FOREIGN KEY (id_tag) REFERENCES Tag(id);