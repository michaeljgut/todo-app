\c todo_db;

CREATE TABLE IF NOT EXISTS tasks
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  status VARCHAR(5),
  category VARCHAR(255),
  description TEXT
);
