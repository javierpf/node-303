
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
  );
  return Book;
};
