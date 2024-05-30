// middleware/orgAuth.js
const Organization = require('../models/organizationModel.js');
const User = require('../models/userModel.js');
const Plan = require('../models/planModel.js'); 
const Role = require('../models/roleModel.js');
const Salary = require('../models/salaryModel.js');
const Staff = require('../models/staffModel.js');
const Teacher = require('../models/teacherModel.js');
const Student = require('../models/studentModel.js');
const Inventory = require('../models/inventoryModel.js');
const Account = require('../models/accountModel.js');
const Tranport = require('../models/transportModel.js');

const orgAuth = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).populate('organizationId roleId');

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const organization = await Organization.findById(user.organizationId);
    const role = await Role.findById(user.roleId);
    const plan = await Plan.findById(organization.planId);

    if (!organization || !role || !plan) {
      return res.status(401).json({ error: 'Invalid organization, role, or plan' });
    }

    if (plan.name !== 'Pro') {
      return res.status(403).json({ error: 'Organization does not have a Pro Plan' });
    }

    if (role.name !== 'admin' && !role.permissions.includes('add-student')) {
      return res.status(403).json({ error: 'User does not have permission to add students' });
    }

    // Attach the user and organization to the request object
    req.userDetails = { user, organization, role, plan };
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = orgAuth;
