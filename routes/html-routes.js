const express = require("express");
const router = express.Router();
const app = express();
const db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
   // GET route for getting all of the posts
   app.get("/", (req, res) => {
      res.render("index");
   });

   app.get("/polls", (req, res) => {
      res.render("polls");
   });

   // router.get("/main", (req, res) => {
   //    res.render("main");
   // });
   // app.get("/viewPolls", (req, res) => {
   //    res.render("viewPolls");
   // });
   // app.get("/results", (req, res) => {
   //    res.render("results");
   // });
};
