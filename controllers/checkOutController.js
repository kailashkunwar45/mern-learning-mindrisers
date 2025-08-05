import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import Checkout from '../models/checkOut.js'

export const checkout = async (req, res) => {
  try {
    const userId = req.userId;

    const cart = await Cart.findOne({ user: userId }).populate("products.product");
    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: "Cart is empty or not found." });
    }

    const totalAmount = cart.products.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    const order = await Order.create({
      user: userId,
      products: cart.products,
      totalAmount,
      status: "placed",
    });

    const checkout = await Checkout.create({
      user: userId,
      cart: cart._id,
      order: order._id,
      paymentStatus: "completed",
      paymentMethod: "manual",
      totalAmount,
    });

    cart.products = [];
    await cart.save();

    res.status(200).json({
      message: "Checkout successful",
      order,
      checkout,
    });

  } catch (err) {
    res.status(500).json({
      message: "Checkout failed",
      error: err.message,
    });
  }
};
