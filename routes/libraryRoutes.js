// routes/libraryRoutes.js
const express = require('express');
const router = express.Router();
const { addBook, updateBook, deleteBook, getBook } = require('../controllers/organization/libraryController.js');
const userAuth = require('../middlewares/userAuth.js');
const orgAuth = require('../middlewares/orgAuth.js');

// Add a book
router.post('/books', userAuth, orgAuth, addBook);

// Update a book
router.put('/books/:id', userAuth, orgAuth, updateBook);

// Delete a book
router.delete('/books/:id', userAuth, orgAuth, deleteBook);

// Get book details
router.get('/books/:id', userAuth, orgAuth, getBook);

module.exports = router;
