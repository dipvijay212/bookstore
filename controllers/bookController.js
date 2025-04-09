const Book = require('../models/book');

// GET 
exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// POST
exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

// update
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
  res.json(book);
};

// DELETE
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.json({ message: 'Book deleted successfully' });
};
