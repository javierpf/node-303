/* eslint-disable */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config');

const username = config.get('development:username');
const password = config.get('development:password');
const dbName = config.get('development:database');
const options = {
  dialect: 'postgres',
  port: 5432,
};
const client = new Sequelize(dbName, username, password, options);
const models = {};

fs.readdirSync(`${__dirname}/../../models`)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== 'index.js';
  })
  .forEach((file) => {
    const model = client.import(path.join(`${__dirname}/../../models`, file));
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].options.hasOwnProperty('associate')) {
    models[modelName].options.associate(models);
  }
});

module.exports = client;
module.exports.models = models;
module.exports.Sequelize = client.Sequelize;
