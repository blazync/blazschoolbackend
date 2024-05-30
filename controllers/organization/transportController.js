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

// Create a new transport record
const addVehicle = async (req, res) => {
    try {
        const newTransportRecord = new TransportRecord(req.body);
        const transportRecord = await newTransportRecord.save();
        res.status(201).json(transportRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific transport record by ID
const getVehicle = async (req, res) => {
    try {
        const transportRecord = await TransportRecord.findById(req.params.id);
        if (!transportRecord) {
            return res.status(404).json({ message: 'Transport record not found' });
        }
        res.status(200).json(transportRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a specific transport record by ID
const updateVehicle = async (req, res) => {
    try {
        const transportRecord = await TransportRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!transportRecord) {
            return res.status(404).json({ message: 'Transport record not found' });
        }
        res.status(200).json(transportRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific transport record by ID
const deleteVehicle = async (req, res) => {
    try {
        const transportRecord = await TransportRecord.findByIdAndDelete(req.params.id);
        if (!transportRecord) {
            return res.status(404).json({ message: 'Transport record not found' });
        }
        res.status(200).json({ message: 'Transport record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addVehicle, updateVehicle, deleteVehicle, getVehicle
};
