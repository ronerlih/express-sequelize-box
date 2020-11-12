//=== SEQUELIZE REFERENCES THE STANDARD LIBRARY =================
const Sequelize = require("sequelize");

//=== SEQUELIZE REFERENCES OUR CONNECTION TO THE DB =============
const sequelize = require("../config/connection.js");

//=== CHIRP MODEL THAT MATCHES UP WITH DB =======================
const Poll = sequelize.define("polls", {
   user: Sequelize.STRING,
   question: Sequelize.STRING,
   optionOne: Sequelize.STRING,
   optionTwo: Sequelize.STRING,
   optionThree: Sequelize.STRING,
   optionFour: Sequelize.STRING
});

//=== SYNCING WITH DB ===========================================
Poll.sync();

//=== MAKES POLL MODEL AVAILABLE FOR THE OTHER FILES ===========
module.exports = Poll;














//=== RONS TEMPLATE CODE ==============================================
// module.exports = function(sequelize, DataTypes) {
//    const Test = sequelize.define("Test", {
//       comment: {
//          type: DataTypes.STRING,
//          validate: { len: [1, 500] }
//       }
//    });
//    return Test;
// };
