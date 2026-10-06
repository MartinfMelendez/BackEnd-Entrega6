import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientEmail: { type: String },
  date: { type: Date },
  time: { type: String },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    
    default: 'pending',
  },
  services: [
    {
      serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
      quantity: { type: Number, default: 1 },
    },
  ],
  updatedAt: { type: Date, default: Date.now },
});

bookingSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

export const BookingModel = mongoose.model('Booking', bookingSchema);