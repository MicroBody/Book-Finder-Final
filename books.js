const express = require('express');
const router = express.Router();

const books = [
  {
    id: 1,
    title: 'Book Title',
    author: 'Author Name',
    genre: 'Fiction',
    releaseDate: '2022-01-01',
    description: 'Description of the book',
    rating: 4
  }
];

router.get('/', (req, res) => {
  res.json(books);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);

  if (!book) {
    res.status(404).send('Book not found');
  } else {
    res.json(book);
  }
});

// Create a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.json(newBook);
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBook = req.body;
  const index = books.findIndex(book => book.id === id);

  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBook };
    res.json(books[index]);
  } else {
    res.status(404).send('Book not found');
  }
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);

  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).send('Book not found');
  }
});

module.exports = router;