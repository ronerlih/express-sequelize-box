const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /create
router.get("/", (req, res) => {
   // get polls from db and send to template
   db.Polls.findAll({})
      .then((polls) => {
         res.render("index", { polls: polls });
      })
      .catch((err) => {
         res.status(500);
         next(err);
      });
});

module.exports = router;