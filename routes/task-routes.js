// import dependencies
const express = require('express');
// initialize router
const taskRouter = express.Router();

const tasksController = require('../controllers/tasks-controller');

// initial two routes
taskRouter.get('/', tasksController.index);
taskRouter.post('/', tasksController.create);

taskRouter.get('/new', (req, res) => {
  res.render('tasks/tasks-add');
});

taskRouter.get('/:id', tasksController.show);
taskRouter.get('/:id/edit', tasksController.edit);
taskRouter.put('/:id', tasksController.update);

taskRouter.delete('/:id', tasksController.delete);


module.exports = taskRouter;
