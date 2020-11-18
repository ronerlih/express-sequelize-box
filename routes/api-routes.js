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
   // still returning 0's - 
   app.get("/api/results/:id", (req, res) => {
      const queryPollId = JSON.parse(req.params.id);
      // console.log("QUERYPOLLID:", queryPollId);      
      const optionOneResults = 0;
      let optionTwoResults = 0;
      let optionThreeResults = 0;
      let optionFourResults = 0;

      Votes.findAll({
         where: { // ============= I think the problems lies in here somewhere. When the 'where' is commented out, we get an array back. When it's there, the array is empty.
            pollId: queryPollId
         }
      }).then((results) => {
         console.log("RESULTS:", results); // ============= this is returning an empty array. We need to it to be an object
      }).then((voteResults) => {
         console.log("VOTE RESULTS:", voteResults);
         Poll.findAll({
            where: {
               id: queryPollId
            }
         }).then((pollResults) => {
            voteResults.forEach((vResult) => {
               pollResults.forEach((pResult) => {
                  if (pResult.optionOne === vResult.optionSelection) {
                     returnoptionOneResults = optionOneResults + 1;
                  }
                  if (pResult.optionTwo === vResult.optionSelection) {
                     optionTwoResults = optionTwoResults + 1;
                  }
                  if (pResult.optionOThree === vResult.optionSelection) {
                     optionThreeResults = optionThreeResults + 1;
                  }
                  if (pResult.optionFour === vResult.optionSelection) {
                     optionFourResults = optionFourResults + 1;
                  }
               });
            });
         });
         console.log("ONE", optionOneResults);
         console.log("TWO", optionTwoResults);
         console.log("THREE", optionThreeResults);
         console.log("FOUR", optionFourResults);
      });
      res.json({
         optionOneResults,
         optionTwoResults,
         optionThreeResults,
         optionFourResults,
      });


   });



};