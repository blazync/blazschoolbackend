// routes/amsRoutes.js
const express = require('express');
const router = express.Router();
const { createAccount, updateAccount, deleteAccount, getAccount } = require('../controllers/organization/amsController.js');
const userAuth = require('../middlewares/userAuth');
const orgAuth = require('../middlewares/orgAuth');

// Create an account
router.post('/accounts', userAuth, orgAuth, createAccount);

// Update an account
router.put('/accounts/:id', userAuth, orgAuth, updateAccount);

// Delete an account
router.delete('/accounts/:id', userAuth, orgAuth, deleteAccount);

// Get account details
router.get('/accounts/:id', userAuth, orgAuth, getAccount);

module.exports = router;
