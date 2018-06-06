#!/usr/bin/env node

const app = require('../app');
// const debug = require('debug')('node-303:server');
const http = require('http');
const config = require('../config');
const sequelize = require('../data/sequelize');

const port = config.get('server:port');
app.set('port', port);

const server = http.createServer(app);

const connection = sequelize.sync();
connection.error(() =>
  console.error('Error stablishing connection with database'));


connection.then(() => {
  server.listen(port);

  console.log('Connected to database and listening }');
});

