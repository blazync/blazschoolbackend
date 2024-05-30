// routes/transportRoutes.js
const express = require('express');
const router = express.Router();
const { addVehicle, updateVehicle, deleteVehicle, getVehicle } = require('../controllers/organization/transportController.js');
const userAuth = require('../middlewares/userAuth.js');
const orgAuth = require('../middlewares/orgAuth.js');

// Add a vehicle
router.post('/vehicles', userAuth, orgAuth, addVehicle);

// Update a vehicle
router.put('/vehicles/:id', userAuth, orgAuth, updateVehicle);

// Delete a vehicle
router.delete('/vehicles/:id', userAuth, orgAuth, deleteVehicle);

// Get vehicle details
router.get('/vehicles/:id', userAuth, orgAuth, getVehicle);

module.exports = router;
