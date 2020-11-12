//=== DEPENDENCIES =================================
const Polls = require("../models/pollmodel.js");

//=== ROUTES =======================================
module.exports = function(app){

   //=== GET ALL THE POLLS ============================
   app.get("/api/all", (req, res)=> {
      //SOMETHING HAPPENS
   });

   //=== ADD A POLL ===================================
   app.post("/api/new", (req, res)=> {
      Polls.create({
         user: req.body.user,
         optionOne: req.body.optionOne,
         optionTwo: req.body.optionTwo,
         optionThree: req.body.optionThree,
         optionFour: req.body.optionFour
      }).then((results)=> {
         res.end();
      });
   });
};