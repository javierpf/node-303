module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define(
    "Book",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
        // validate: {
        //   notEmpty: true
        // }
      },
      author: {
        type: DataTypes.STRING
        // allowNull: true
      },
      content: {
        type: DataTypes.STRING
        // allowNull: false,
        // validate: {
        //   notEmpty: true
        // }
      }
    },
    {
      underscored: true,
      tableName: "books",
      paranoid: true,
      associate: models => {}
    }
  );

  return Book;
};
