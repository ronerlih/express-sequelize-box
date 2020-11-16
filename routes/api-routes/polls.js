const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", (req, res) => {
   db.Polls.findAll({})
      .then((dbPolls) => {
         res.json(dbPolls);
      });
});