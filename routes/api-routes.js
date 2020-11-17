//=== DEPENDENCIES =================================
const Poll = require("../models/pollmodel.js");
const Votes = require("../models/votesmodels.js");

//=== ROUTES =======================================
module.exports = function (app) {

   //=== GET ALL THE POLLS ============================
   app.get("/api/all", (req, res) => {
      Poll.findAll({}).then((results) => {
         res.json(results);
      });
   });

   app.get("/api/votes/:poll", (req, res) => {
      Votes.findAll({pollId:req.params.poll}).then((results) => {
         res.json(results);
      });
   });

   //=== ADD A POLL ===================================
   app.post("/api/new", (req, res) => {
      console.log("Is this unique???????");
      console.log(req.body);
      Poll.create(req.body)
         .then((results) => {
            res.json({...results.dataValues});
         });
   });
};