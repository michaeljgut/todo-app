const Task = require('../models/task');

const tasksController = {};

tasksController.index = (req, res) => {
  Task.findAll()
    .then(tasks => {
      res.render('tasks/tasks-index', {
        tasks: tasks,
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

tasksController.show = (req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      res.render('tasks/tasks-show', {
        task: task,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

tasksController.create = (req, res) => {
  Task.create({
    title: req.body.title,
    status: req.body.status,
    category: req.body.category,
    description: req.body.description,
  }).then(task => {
    res.redirect(`/tasks/${task.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

tasksController.edit = (req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      res.render('tasks/tasks-edit', {
        task: task,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

tasksController.update = (req, res) => {
  Task.update({
    title: req.body.title,
    status: req.body.status,
    category: req.body.category,
    description: req.body.description,
  }, req.params.id).then(task => {
    res.redirect(`/tasks/${task.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

tasksController.delete = (req, res) => {
  Task.destroy(req.params.id)
    .then(() => {
      res.redirect('/cats');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = tasksController;
