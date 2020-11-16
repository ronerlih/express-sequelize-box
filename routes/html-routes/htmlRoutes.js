const express = require("express");
const router = express.Router();
const app = express();
const db = require("../../models");

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/main', function (req, res) {
  res.render('main');
});

app.get('/viewPolls', function (req, res) {
  res.render('viewPolls');
});

app.get('/results', function (req, res) {
  res.render('results');
});



module.exports = router;
