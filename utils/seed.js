const db = require("../models");

module.exports = function() {

   console.log("\n🚀 init table seed");
   return db.Comment.create({ comment: "🚀 init" });
};
