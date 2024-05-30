// routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const { createInventoryItem,
    getInventoryItem,
    updateInventoryItem,
    deleteInventoryItem } = require('../controllers/organization/inventoryController.js');
const userAuth = require('../middlewares/userAuth');
const orgAuth = require('../middlewares/orgAuth');

// Add an inventory item
router.post('/items', userAuth, orgAuth, createInventoryItem);

// Update an inventory item
router.put('/items/:id', userAuth, orgAuth, updateInventoryItem);

// Delete an inventory item
router.delete('/items/:id', userAuth, orgAuth, deleteInventoryItem);

// Get inventory item details
router.get('/items/:id', userAuth, orgAuth, getInventoryItem);

module.exports = router;
