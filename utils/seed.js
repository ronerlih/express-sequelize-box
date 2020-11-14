const config = require("../config");

module.exports = function(table) {
   if (config.sync) {
      console.log("\n🚀 init table seed");
      return table.create({ comment: "🚀 init" });
   }
   return Promise.resolve();
};
