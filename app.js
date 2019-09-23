'use strict';
const app = require('./server');

const port = 3000;
const { db } = require('./server/db');

db.sync().then(() => {
  console.log('db synced');
  app.listen(port, function() {
    console.log('server is listening')
  })
})