CREATE DATABASE Capstone;

CREATE TABLE tickets(
   tickets_id SERIAL PRIMARY KEY,
   item VARCHAR(50),
   description VARCHAR (255),
   dropoff_date date NOT NULL DEFAULT CURRENT_DATE,
   status VARCHAR (50),
   notes VARCHAR (255)
);

INSERT INTO tickets (item, description, dropoff_date)
VALUES ( 'Drill', 'Does Not Work', current_date);

ALTER TABLE tickets ADD COLUMN user_id INT;

SELECT * FROM tickets;

CREATE TABLE users(
   user_id SERIAL PRIMARY KEY,
   user_name VARCHAR (255) NOT NULL,
   email VARCHAR (255) NOT NULL UNIQUE,
   password VARCHAR (255) NOT NULL
);

SELECT * FROM users;
