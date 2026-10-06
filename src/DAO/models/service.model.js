import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    available: { type: Boolean, default: true },
    delete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const ServiceModel = mongoose.model('Service', serviceSchema)