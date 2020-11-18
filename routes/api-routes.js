//=== DEPENDENCIES =================================
const Poll = require("../models/pollmodel.js");
const Votes = require("../models/votesmodels.js");
const db = require("../db/index");

//=== ROUTES =======================================
module.exports = function (app) {

   //=== GET ALL THE POLLS ============================
   app.get("/api/all", (req, res) => {
      Poll.findAll({}).then((results) => {
         res.json(results);
      });
   });

   //=== POST A VOTE ===================================
   app.post("/api/vote", (req, res) => {
      // console.log(req.body);
      Votes.create(req.body).then((results) => {
         // console.log(results);
         res.json(results);
      });
   });

   //=== ADD A POLL ===================================
   app.post("/api/new", (req, res) => {
      // console.log("Is this unique???????");
      // console.log(req.body);
      Poll.create(req.body)
         .then((results) => {
            res.json({ ...results.dataValues });
         });
   });

   //=== GET VOTING RESULTS ===================================
   // THIS GET REQUEST SHOULD TO DO THE FOLLOWING:
   // COUNT ALL THE optionSelects THAT ARE THE SAME
   // RETURN THE COUNT VALUE FOR EACH OPTION
   // INPUT EACH COUNT VALUE INTO THE renderCanvas (line33) IN SCRIPT.JS

   app.get("/api/results", (req, res) => {

      res.json({

      });


      // const optionOneResults = 0;
      // let optionTwoResults = 0;
      // let optionThreeResults = 0;
      // let optionFourResults = 0;
      // Votes.findAll().then((voteResults) => {
      //    Poll.findAll().then((pollResults) => {
      //       voteResults.forEach((vResult) => {
      //          pollResults.forEach((pResult) => {
      //             if (pResult.optionOne === vResult.optionSelection) {
      //                returnoptionOneResults = optionOneResults + 1;
      //             }
      //             if (pResult.optionTwo === vResult.optionSelection) {
      //                optionTwoResults = optionTwoResults + 1;
      //             }
      //             if (pResult.optionOThree === vResult.optionSelection) {
      //                optionThreeResults = optionThreeResults + 1;
      //             }
      //             if (pResult.optionFour === vResult.optionSelection) {
      //                optionFourResults = optionFourResults + 1;
      //             }
      //          });
      //       });
      //    });
      // });
      // console.log("ONE", optionOneResults);
      // console.log("TWO", optionTwoResults);
      // console.log("THREE", optionThreeResults);
      // console.log("FOUR", optionFourResults);
      // res.json({
      //    optionOneResults,
      //    optionTwoResults,
      //    optionThreeResults,
      //    optionFourResults,
      // });


      
   });



};