const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  grade: { type: String, required: true },
  contactInfo: {
    email: String,
    phone: String,
    address: String
  },
  enrollmentDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

studentSchema.index({ organizationId: 1, lastName: 1 });

module.exports = mongoose.model('Student', studentSchema);
