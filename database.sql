CREATE DATABASE Capstone;

CREATE TABLE tickets(
   tickets_id SERIAL PRIMARY KEY,
   item VARCHAR(50),
   description VARCHAR (255),
   date timestamp
);

INSERT INTO tickets (item, description, date)
VALUES ( 'Drill', 'Does Not Work', current_date);

SELECT * FROM tickets;
