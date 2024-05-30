const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarySchema = new Schema({
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  staffId: { type: Schema.Types.ObjectId, ref: 'Staff', required: true },
  salaryAmount: { type: Number, required: true },
  paymentDate: { type: Date, required: true },
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

salarySchema.index({ organizationId: 1, staffId: 1 });

module.exports = mongoose.model('Salary', salarySchema);
