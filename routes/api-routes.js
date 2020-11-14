//=== DEPENDENCIES =================================
const Poll = require("../models/pollmodel.js");

//=== ROUTES =======================================
module.exports = function (app) {

   //=== GET ALL THE POLLS ============================
   app.get("/api/all", (req, res) => {
      Poll.findAll({}).then((results) => {
         res.json(results);
      });
   });

   //=== ADD A POLL ===================================
   app.post("/api/new", (req, res) => {
      Poll.create(req.body)
         .then((results) => {
            console.log(results);
            res.json(results);
         });
   });
};