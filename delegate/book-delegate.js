const sequelize = require("../data/sequelize");

exports.getBooks = () => {
  return sequelize.models.Book.findAll();
};

exports.getBook = id => {
  return sequelize.models.Book.findById(id);
};

exports.saveBook = book => {
  return sequelize.models.Book.create(book);
};

exports.updateBook = async (id, book) => {
  const persisted = await sequelize.models.Book.findById(id);
  Object.keys(book).forEach(key => (persisted[key] = book[key]));
  return persisted.save();
};

exports.removeBook = async id => {
  const persisted = await sequelize.models.Book.findById(id);
  return persisted.destroy();
};
