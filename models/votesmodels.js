//=== SEQUELIZE REFERENCES THE STANDARD LIBRARY =================
const Sequelize = require("sequelize");

//=== SEQUELIZE REFERENCES OUR CONNECTION TO THE DB =============
const sequelize = require("../config/connection.js");

//=== CHIRP MODEL THAT MATCHES UP WITH DB =======================
const Votes = sequelize.define("votes", {
   optionSelect: Sequelize.STRING,
   pollId: {
      type: Sequelize.INTEGER,
      references: {
         model: "polls",
         key: "id",
      }
   }
});

//=== SYNCING WITH DB ===========================================
Votes.sync();

//=== MAKES POLL MODEL AVAILABLE FOR THE OTHER FILES ===========
module.exports = Votes;
