const express = require("express");
const router = express.Router();
const db = require("../../models");

// /API/COMMENTS/
// post comment route -> back to index
router.route("/")
   // POST to Comments
   .post((req, res, next) => {
      db.Comment.create({comment: req.body.comment})
         .then((newComment) => {
            console.log("[node] new comment:", newComment.comment);
            res.redirect("/");
            // optionally return data created
            // res.json(newComment)
         })
         .catch((err) => {
            res.status(500);
            next(err);
         });
   });
  

module.exports = router;
