CREATE DATABASE todo_ts_postgre;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

INSERT INTO todo (description)
    VALUES ('this is the first todo');