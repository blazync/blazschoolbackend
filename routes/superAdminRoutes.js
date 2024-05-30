// routes/superAdminRoutes.js
const express = require('express');
const router = express.Router();
const { manageOrganizations, managePlans } = require('../controllers/superAdminController');

// Will Change here to superadmin auth
const userAuth = require('../middlewares/userAuth');

// Super admin routes
router.get('/organizations', userAuth, manageOrganizations);
router.post('/plans', userAuth, managePlans);

module.exports = router;
