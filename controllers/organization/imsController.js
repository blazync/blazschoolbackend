// controllers/userController.js
const mongoose = require('mongoose');
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
const bcrypt = require('bcrypt');

exports.registerStudent = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { firstName, lastName, email, password } = req.body;
    const { organization } = req.userDetails;

    const studentRole = await Role.findOne({ name: 'student' }).session(session);
    if (!studentRole) {
      throw new Error('Student role not found');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new User({
      organizationId: organization._id,
      roleId: studentRole._id,
      email,
      passwordHash: hashedPassword,
      firstName,
      lastName
    });

    await student.save({ session });
    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ message: 'Student registered successfully', student });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ error: error.message });
  }
};

exports.registerTeacher = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { firstName, lastName, email, password } = req.body;
    const { organization } = req.userDetails;

    const teacherRole = await Role.findOne({ name: 'teacher' }).session(session);
    if (!teacherRole) {
      throw new Error('Teacher role not found');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const teacher = new User({
      organizationId: organization._id,
      roleId: teacherRole._id,
      email,
      passwordHash: hashedPassword,
      firstName,
      lastName
    });

    await teacher.save({ session });
    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ message: 'Teacher registered successfully', teacher });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ error: error.message });
  }
};
