import Order from "../models/order.js";

export const checkOrder = (req, res, next) => {
  Order.findById(req.params.id).then(order => {
    if (!order) return res.status(404).json({ message: "Order not found" });

    if (req.role !== "Admin" && order.user.toString() !== req.userId) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  }).catch(() => {
    res.status(500).json({ message: "Server error" });
  });
};
