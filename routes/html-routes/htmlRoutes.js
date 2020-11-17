const express = require("express");
const router = express.Router();
const app = express();
const db = require("../../models");

router.get("/", (req, res) => {
   res.render("index");
});

router.get("/main", (req, res) => {
   res.render("main");
});

app.get("/viewPolls", (req, res) => {
   res.render("viewPolls");
});

app.get("/results", (req, res) => {
   res.render("results");
});



module.exports = router;
