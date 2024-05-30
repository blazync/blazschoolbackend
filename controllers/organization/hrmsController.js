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
const Tranport = require('../../models/transportModel.js');

// Create a new staff member
const createStaff = async (req, res) => {
    try {
        const newStaff = new Staff(req.body);
        const staff = await newStaff.save();
        res.status(201).json(staff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific staff member by ID
const getStaff = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id);
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a specific staff member by ID
const updateStaff = async (req, res) => {
    try {
        const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific staff member by ID
const deleteStaff = async (req, res) => {
    try {
        const staff = await Staff.findByIdAndDelete(req.params.id);
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.status(200).json({ message: 'Staff deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new salary record
const createSalary = async (req, res) => {
    try {
        const newSalary = new Salary(req.body);
        const salary = await newSalary.save();
        res.status(201).json(salary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific salary record by ID
const getSalary = async (req, res) => {
    try {
        const salary = await Salary.findById(req.params.id);
        if (!salary) {
            return res.status(404).json({ message: 'Salary not found' });
        }
        res.status(200).json(salary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a specific salary record by ID
const updateSalary = async (req, res) => {
    try {
        const salary = await Salary.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!salary) {
            return res.status(404).json({ message: 'Salary not found' });
        }
        res.status(200).json(salary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific salary record by ID
const deleteSalary = async (req, res) => {
    try {
        const salary = await Salary.findByIdAndDelete(req.params.id);
        if (!salary) {
            return res.status(404).json({ message: 'Salary not found' });
        }
        res.status(200).json({ message: 'Salary deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createStaff,
    getStaff,
    updateStaff,
    deleteStaff,
    createSalary,
    getSalary,
    updateSalary,
    deleteSalary
};
