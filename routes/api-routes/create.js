const express = require("express");
const router = express.Router();
const db = require("../../models");

// /api/create 
// post comment route -> back to index
router.post("/", (req, res, next) => {
   console.log("inside api create", res);
   db.Polls.create(req.body);
   console.log(req.body)
      .then(newPoll => {
         console.log("[node] new poll:", newPoll.question);
         // res.redirect("/");  ===== WHERE TO REDIRECT AFTER POLL SUBMITTED? =======
         // optionally return data created
         // res.json(newPoll)
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
