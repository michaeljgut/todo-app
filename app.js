// import dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

// initialize app
const app = express();

// use middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// set up static and views
app.use(express.static('public'));
// set which templating engine
app.set('view engine', 'ejs');
// set where the app should find the views
app.set('views', path.join(__dirname, 'views'));

// port & listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


// index route
app.get('/', (req, res) => {
  res.render('index', { title: 'Tasks!'});
});

const taskRoutes = require('./routes/task-routes');
app.use('/tasks', taskRoutes);

// error handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found, invalid endpoint',
  });
});
