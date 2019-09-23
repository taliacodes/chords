const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { db } = require('./db');
//logging middleware where server logs helps with debugging

const app = express();
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api routes
app.use('/api', require('./api'));

//static middleware for when browser requests static assets from your server
app.use(express.static(path.join(__dirname, '../public')));

// what is this?
// app.use((req, res, next) => {
//   if (path.extname(req.path).length) {
//     const err = new Error('Not found.');
//     err.status = 404;
//     next(err);
//   } else {
//     next();
//   }
// });

//if there's an error, this index.html file will be sent
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//send 500 error for errors on our part
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal service error');
});

module.exports = app;
