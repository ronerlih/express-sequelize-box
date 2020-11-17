module.exports = function(db) {

   // returns one promise 
   //(that you can wait for on server.js)

   console.log("\n🚀 init table seed\n");

   // check if db and table exist and connected
   if (!(db && db.Comment))  
      throw new Error("no Comments table in database, did you create the db?\nHave a look at: db/schema.sql and run it in your mysql client.");

   // Promise.all:
   // expects an array of promises
   // returns an array of values returned
   return Promise.all([
      db.Comment.bulkCreate([
         { comment: "🚀 init" },
         { comment: "another seed" }])
      // seed a diffent table
      // db.AnotehrTable.create({ columnName: "val" }),
   ]); 
};
