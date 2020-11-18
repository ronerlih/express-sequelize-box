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
   
app.get("/api/all", function(req, res) {
      res.sendFile(path.join(__dirname, "./views/partials/viewPolls.handlebars"));
   });

};
