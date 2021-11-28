CREATE DATABASE Capstone;

CREATE TABLE tickets(
   tickets_id SERIAL PRIMARY KEY,
   item VARCHAR(50),
   description VARCHAR (255),
   date timestamp
)
