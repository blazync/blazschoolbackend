const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  contactInfo: {
    email: String,
    phone: String,
    address: String
  },
  hireDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

staffSchema.index({ organizationId: 1, lastName: 1 });

module.exports = mongoose.model('Staff', staffSchema);
