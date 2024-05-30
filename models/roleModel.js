const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  name: { type: String, required: true }, // e.g., "admin", "principal", "teacher", "student", "staff"
  permissions: { type: [String], required: true }, // List of permissions
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Role', roleSchema);
