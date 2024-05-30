// routes/lmsRoutes.js
const express = require('express');
const router = express.Router();
const { createLesson, updateLesson, deleteLesson, getLesson } = require('../controllers/organization/lmsController.js');
const userAuth = require('../middlewares/userAuth');
const orgAuth = require('../middlewares/orgAuth');

// Create a lesson
router.post('/lessons', userAuth, orgAuth, createLesson);

// Update a lesson
router.put('/lessons/:id', userAuth, orgAuth, updateLesson);

// Delete a lesson
router.delete('/lessons/:id', userAuth, orgAuth, deleteLesson);

// Get lesson details
router.get('/lessons/:id', userAuth, orgAuth, getLesson);

module.exports = router;
