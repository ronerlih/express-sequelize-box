const express = require("express");
const router = express.Router();
const db = require("../../models");

// HOME page
router.get("/", (req, res) => {
   // get comments from db and send to template
   db.Comment.findAll({})
      .then((comments) => {
         res.render("comments", { comments: comments } );
      })
      .catch((err) => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
