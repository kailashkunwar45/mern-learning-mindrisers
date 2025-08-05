import mongoose from "mongoose";

const checkOutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
    required: true,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },

  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  paymentMethod: {
    type: String,
    default: "manual",
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  checkoutDate: {
    type: Date,
    default: Date.now,
  }
});

const Checkout = mongoose.model("Checkout", checkOutSchema);

export default Checkout;
