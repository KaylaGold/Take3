module.exports = function(sequelize, DataTypes) {
  let Mybooks = sequelize.define("Mybooks", {
    title: DataTypes.STRING,
    author: DataTypes.STRING
  });
  return Mybooks;
 };