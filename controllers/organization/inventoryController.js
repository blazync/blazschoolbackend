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

// Create a new inventory item
const createInventoryItem = async (req, res) => {
    try {
        const newInventoryItem = new InventoryItem(req.body);
        const inventoryItem = await newInventoryItem.save();
        res.status(201).json(inventoryItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific inventory item by ID
const getInventoryItem = async (req, res) => {
    try {
        const inventoryItem = await InventoryItem.findById(req.params.id);
        if (!inventoryItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.status(200).json(inventoryItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a specific inventory item by ID
const updateInventoryItem = async (req, res) => {
    try {
        const inventoryItem = await InventoryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!inventoryItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.status(200).json(inventoryItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific inventory item by ID
const deleteInventoryItem = async (req, res) => {
    try {
        const inventoryItem = await InventoryItem.findByIdAndDelete(req.params.id);
        if (!inventoryItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.status(200).json({ message: 'Inventory item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createInventoryItem,
    getInventoryItem,
    updateInventoryItem,
    deleteInventoryItem
};
