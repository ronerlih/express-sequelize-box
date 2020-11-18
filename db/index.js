const connection = require("../config/connection");

class Results {
   constructor(connection) {
      this.connection = connection;
   }

   findPolls(pollId) {
      return this.connection.query(
         "SELECT * FROM polls WHERE id=?", pollId
      );
   }
   
   voteCount(option) {
      return this.connection.query(
         "SELECT COUNT (optionSelect) FROM votes WHERE optionSelect=?", option
      );
   }
}


module.exports = new Results(connection);