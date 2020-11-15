module.exports = function(db) {

   console.log("\n🚀 init table seed");

   // check if db and table exist and connected
   if (!(db && db.Comment))  
      throw new Error("no Comments table in database, did you create the db?\nHave a look at: db/schema.sql and run it in your mysql client.");

   return db.Comment.create({ comment: "🚀 init" });
};
