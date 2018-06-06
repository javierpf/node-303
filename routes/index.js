const express = require('express');
const registerBooks = require('./books-route');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('Hello 303!');
});

module.exports = (app) => {
  app.use(router);
  app.use('/books', registerBooks());
  // This test only has one endpoint, but other resources routes should be placed here
  return router;
};
