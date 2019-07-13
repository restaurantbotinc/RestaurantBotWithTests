var express = require("express");
var router = express.Router();

/* GET reservations listing. */
router.get("/", function(req, res, next) {
  res.json([
    { id: 1, name: "John Lennon, 7pm party of 4" },
    { id: 2, name: "Mary Berry, 1pm party of 2" }
  ]);
});

module.exports = router;
