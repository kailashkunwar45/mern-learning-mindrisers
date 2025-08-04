import mongoose from "mongoose";
import Order from "../models/order.js";
import Product from "../models/Product.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json({ orders });
  } catch (err) {
    return res.status(500).json({ message: "Failed to get orders", error: err.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid order ID format" });
    }

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json({ order });
  } catch (err) {
    return res.status(500).json({ message: "Failed to get order", error: err.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { user, products } = req.body;

    if (!user || !products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "User and products are required" });
    }

    let totalAmount = 0;
    for (const item of products) {
      if (!item.product || !item.quantity) {
        return res.status(400).json({ message: "Each product must have product id and quantity" });
      }
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(400).json({ message: "Invalid product ID: " + item.product });
      }
      totalAmount += product.price * item.quantity;
    }

    const order = new Order({
      user,
      products,
      totalAmount,
    });

    await order.save();
    return res.status(201).json({ message: "Order created", order });
  } catch (err) {
    return res.status(500).json({ message: "Failed to create order", error: err.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { paymentStatus, orderStatus } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid order ID format" });
    }

    const order = await Order.findByIdAndUpdate(
      id,
      { paymentStatus, orderStatus },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json({ message: "Order updated", order });
  } catch (err) {
    return res.status(500).json({ message: "Failed to update order", error: err.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid order ID format" });
    }

    const order = await Order.findByIdAndDelete(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json({ message: "Order deleted" });
  } catch (err) {
    return res.status(500).json({ message: "Failed to delete order", error: err.message });
  }
};
