const bookDelegate = require('../delegate/book-delegate');

exports.get = (req, res) => {
  bookDelegate.getBooks().then((books) => {
    res.send(books);
  });
};

exports.getById = (req, res) => {
  bookDelegate.getBook(req.params.id).then((books) => {
    res.send(books);
  });
};

exports.post = (req, res) => {
  bookDelegate.saveBook(req.body).then((book) => {
    res.send(book);
  });
};

exports.put = (req, res) => {
  bookDelegate.updateBook(req.params.id, req.body).then((book) => {
    res.send(book);
  });
};

exports.remove = (req, res) => {
  bookDelegate.removeBook(req.params.id).then((book) => {
    res.send(book);
  });
};
