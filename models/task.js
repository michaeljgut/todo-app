const db = require('../db/config');

const Task = {};

Task.findAll = () => {
  return db.query('SELECT * FROM tasks');
};

Task.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM tasks
    WHERE id = $1
  `, [id]);
};

Task.create = (task) => {
  return db.one(`
    INSERT INTO tasks
    (title, status, category, description)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [task.title, task.status, task.category, task.description]);
}

Task.update = (task, id) => {
  return db.one(`
    UPDATE tasks SET
    title = $1,
    status = $2,
    category = $3,
    description = $4
    WHERE id = $5
    RETURNING *
  `, [task.title, task.status, task.category, task.description, id]);
}

Task.destroy = (id) => {
  return db.none(`
    DELETE FROM tasks
    WHERE id = $1
  `, [id]);
};

module.exports = Task;
