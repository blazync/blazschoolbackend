const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  itemName: { type: String, required: true },
  description: String,
  quantity: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  invoiceNumber: String,
  supplier: {
    name: String,
    contactInfo: {
      email: String,
      phone: String,
      address: String
    }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

inventorySchema.index({ organizationId: 1, itemName: 1 });

module.exports = mongoose.model('Inventory', inventorySchema);
