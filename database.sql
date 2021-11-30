CREATE DATABASE Capstone;

CREATE TABLE tickets(
   tickets_id SERIAL PRIMARY KEY,
   item VARCHAR(50),
   description VARCHAR (255),
   date timestamp,
   completed boolean,
   notes VARCHAR (255)
);

INSERT INTO tickets (item, description, date)
VALUES ( 'Drill', 'Does Not Work', current_date);

INSERT INTO tickets (item, description, date)
VALUES ( 'Lawnmower', 'Will not start', current_date);

SELECT * FROM tickets;
