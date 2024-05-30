// controllers/authController.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Organization = require('../../models/organizationModel.js');
const User = require('../../models/userModel.js');
const Plan = require('../../models/planModel.js'); 
const Role = require('../../models/roleModel.js');
const Salary = require('../../models/salaryModel.js');
const Staff = require('../../models/staffModel.js');
const Teacher = require('../../models/teacherModel.js');
const Student = require('../../models/studentModel.js');
const Inventory = require('../../models/inventoryModel.js');
const Account = require('../../models/accountModel.js');


const registerOrganization = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { orgName, address, contactEmail, contactPhone, adminEmail, adminPassword, adminFirstName, adminLastName } = req.body;

    // Check if organization already exists
    let organization = await Organization.findOne({ name: orgName }).session(session);
    if (organization) {
      throw new Error('Organization already exists');
    }

    // Check if user email already exists
    let user = await User.findOne({ email: adminEmail }).session(session);
    if (user) {
      throw new Error('User email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Fetch default plan and role
    const defaultPlan = await Plan.findOne({ name: 'free-trial' }).session(session); // Adjust query as per your schema
    const adminRole = await Role.findOne({ name: 'admin' }).session(session); // Adjust query as per your schema

    if (!defaultPlan || !adminRole) {
      throw new Error('Default plan or admin role not found');
    }

    // Create organization
    organization = new Organization({
      name: orgName,
      address,
      contactEmail,
      contactPhone,
      planId: defaultPlan._id,
      isActive: true
    });
    await organization.save({ session });

    // Create admin user
    user = new User({
      organizationId: organization._id,
      roleId: adminRole._id,
      email: adminEmail,
      passwordHash: hashedPassword,
      firstName: adminFirstName,
      lastName: adminLastName
    });
    await user.save({ session });

    // Update organization with adminId
    organization.adminId = user._id;
    await organization.save({ session });

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ message: 'Organization and admin user created successfully' });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ error: error.message });
  }
};


// Update a specific account by ID
const updateOrganization = async (req, res) => {
    try {
        const account = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific account by ID
const deleteOrganization = async (req, res) => {
    try {
        const account = await Account.findByIdAndDelete(req.params.id);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getOrganization = async (req, res) => {
    try {
        const account = await Account.findByIdAndDelete(req.params.id);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
  updateOrganization,deleteOrganization,registerOrganization,getOrganization
}