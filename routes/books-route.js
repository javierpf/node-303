const express = require("express");
const bookServices = require("../services/book-services");

const router = express.Router();

module.exports = () => {
  router.get("/", function(req, res, next) {
    bookServices.get(req, res);
  });
  router.get("/:id", function(req, res, next) {
    bookServices.getById(req, res);
  });
  router.post("/", function(req, res, next) {
    bookServices.post(req, res);
  });
  router.put("/:id", function(req, res, next) {
    bookServices.put(req, res);
  });
  router.delete("/:id", function(req, res, next) {
    bookServices.remove(req, res);
  });
  return router;
};
