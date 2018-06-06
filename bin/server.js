#!/usr/bin/env node

const app = require('../app');
// const debug = require('debug')('node-303:server');
const http = require('http');
const sequelize = require('../data/sequelize');

const port = 3000;
app.set('port', port);

const server = http.createServer(app);

const connection = sequelize.sync();
connection.error(() =>
  console.error('Error stablishing connection with database'));


connection.then(() => {
  server.listen(port);

  console.log('Connected to database and listening }');
});

