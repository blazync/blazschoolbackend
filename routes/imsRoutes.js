// routes/imsRoutes.js
const express = require('express');
const router = express.Router();
const { registerStudent, registerTeacher } = require('../controllers/organization/imsController');
const userAuth = require('../middlewares/userAuth');
const orgAuth = require('../middlewares/orgAuth');

// Register a student
router.post('/students', userAuth, orgAuth, registerStudent);

// Register a teacher
router.post('/teachers', userAuth, orgAuth, registerTeacher);

module.exports = router;
