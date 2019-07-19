var express = require("express");
var router = express.Router();
var App = require("../app.js");

/* GET reservations listing. */
router.get("/", (req, res, next) => {
  res.json([...App.resList]).sendStatus(200);
});

module.exports = router;
