const sequelize = require('../data/sequelize');

exports.getBooks = () => sequelize.models.Book.findAll();

exports.getBook = id => (sequelize.models.Book.findById(id));

exports.saveBook = book => (sequelize.models.Book.create(book));

exports.updateBook = async (id, book) => {
  const persisted = await sequelize.models.Book.findById(id);
  Object.keys(book).forEach((key) => { (persisted[key] = book[key]); });
  return persisted.save();
};

exports.removeBook = async (id) => {
  const persisted = await sequelize.models.Book.findById(id);
  return persisted.destroy();
};
