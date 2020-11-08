module.exports = function(sequelize, DataTypes) {
   const Test = sequelize.define("Test", {
      comment: {
         type: DataTypes.STRING,
         validate: { len: [1, 500] }
      }
   },{
      carset: "utf8",
      collate: "utf8_general_ci" 
   });
   return Test;
};
