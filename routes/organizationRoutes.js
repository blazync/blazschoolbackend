// routes/organizationRoutes.js
const express = require('express');
const router = express.Router();
const { registerOrganization,updateOrganization,deleteOrganization,getOrganization } = require('../controllers/organization/organizationController.js');
const userAuth = require('../middlewares/userAuth.js');
const orgAuth = require('../middlewares/orgAuth.js');

// Register an organization
router.post('/register', userAuth, orgAuth, registerOrganization);

// Update organization
router.put('/:id', userAuth, orgAuth, updateOrganization);

// Delete organization
router.delete('/:id', userAuth, orgAuth, deleteOrganization);

// Get organization details
router.get('/:id', userAuth, orgAuth, getOrganization);

module.exports = router;
