const express = require('express');
const router = express.Router();
const { createNote, getAllNotes, getNoteById, updateNote, deleteNote, searchNotes, shareNote } = require('../controllers/noteController');
const { protect } = require('../middleware/authMiddleware');
// Search notes by query
router.get('/search', protect, searchNotes);
// Create a new note
router.post('/create', protect, createNote);

// Get all notes
router.get('/', protect, getAllNotes);

// Get a single note by ID
router.get('/:id', protect, getNoteById);

// Update a note by ID
router.put('/:id', protect, updateNote);
// Delete a note by ID
router.delete('/:id', protect, deleteNote);
// Share a note
router.post('/share', protect, shareNote);

module.exports = router;
