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

// Create a new lesson
const createLesson = async (req, res) => {
    try {
        const newLesson = new Lesson(req.body);
        const lesson = await newLesson.save();
        res.status(201).json(lesson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific lesson by ID
const getLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a specific lesson by ID
const updateLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific lesson by ID
const deleteLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndDelete(req.params.id);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json({ message: 'Lesson deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createLesson,
    getLesson,
    updateLesson,
    deleteLesson
};
