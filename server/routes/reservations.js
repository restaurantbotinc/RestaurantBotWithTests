var express = require("express");
var router = express.Router();
var resList = require("../app.js");

/* GET reservations listing. */
router.get("/", (req, res, next) => {
  res.json([...resList.resList]).sendStatus(200);
});

module.exports = router;
