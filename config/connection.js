//=== INITIATION THE CONNECTION TO MYSQL =========================
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("polls", "root", "Lavillette", {
   host: "localhost",
   port: 3306, 
   dialect: "mysql",
   pool: {
      max: 5,
      min: 0,
      idle: 10000
   }
});

//=== EXPORTS THE CONNECTION FOR OTHER FILES TO USE ===============
module.exports = sequelize;
