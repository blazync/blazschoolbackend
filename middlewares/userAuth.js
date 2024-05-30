// middleware/auth.js
const jwt = require('jsonwebtoken');
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

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = auth;
