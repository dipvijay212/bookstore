const Book = require('../models/book');

// GET all books
exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// POST a new book
exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

// PUT update a book
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
  res.json(book);
};

// DELETE a book
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.json({ message: 'Book deleted successfully' });
};
