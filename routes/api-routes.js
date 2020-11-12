//=== DEPENDENCIES =================================
const Poll = require("../models/pollmodel.js");

//=== ROUTES =======================================
module.exports = function(app){

   //=== GET ALL THE POLLS ============================
   app.get("/api/all", (req, res)=> {
      Poll.findAll({}).then((results)=> {
         res.json(results);
      });
   });

   //=== ADD A POLL ===================================
   app.post("/api/new", (req, res)=> {
      Poll.create({
         user: req.body.user,
         optionOne: req.body.optionOne,
         optionTwo: req.body.optionTwo,
         optionThree: req.body.optionThree,
         optionFour: req.body.optionFour
      }).then((results)=> {
         //result is the newly created poll
         res.end();
      });
   });
};