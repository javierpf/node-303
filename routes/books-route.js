const express = require('express');
const bookServices = require('../services/book-services');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    bookServices.get(req, res);
  });
  router.get('/:id', (req, res) => {
    bookServices.getById(req, res);
  });
  router.post('/', (req, res) => {
    bookServices.post(req, res);
  });
  router.put('/:id', (req, res) => {
    bookServices.put(req, res);
  });
  router.delete('/:id', (req, res) => {
    bookServices.remove(req, res);
  });
  return router;
};
