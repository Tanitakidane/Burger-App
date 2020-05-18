CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
burgername VARCHAR(130) NOT NULL,
devoured BOOLEAN 
)