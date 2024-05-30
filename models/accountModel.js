const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  transactionId: { type: Schema.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  description: String
});

const accountSchema = new Schema({
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  balance: { type: Number, required: true },
  transactions: [transactionSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

accountSchema.index({ organizationId: 1, userId: 1 });

module.exports = mongoose.model('Account', accountSchema);
