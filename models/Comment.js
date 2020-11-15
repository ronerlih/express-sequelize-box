module.exports = function(sequelize, DataTypes) {
   const Comment = sequelize.define("Comment", {
      comment: {
         type: DataTypes.STRING,
         validate: { len: [1, 500] }
      }
   });
   return Comment;
};
