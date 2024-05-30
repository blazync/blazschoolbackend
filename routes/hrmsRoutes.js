// routes/hrmsRoutes.js
const express = require('express');
const router = express.Router();
const { createSalary, updateSalary, deleteSalary, getSalary } = require('../controllers/organization/hrmsController.js');
const userAuth = require('../middlewares/userAuth');
const orgAuth = require('../middlewares/orgAuth');

// Create a salary record
router.post('/salaries', userAuth, orgAuth, createSalary);

// Update a salary record
router.put('/salaries/:id', userAuth, orgAuth, updateSalary);

// Delete a salary record
router.delete('/salaries/:id', userAuth, orgAuth, deleteSalary);

// Get salary details
router.get('/salaries/:id', userAuth, orgAuth, getSalary);

module.exports = router;
