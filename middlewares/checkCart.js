import Cart from "../models/cart.js";

export const checkCart = (req, res, next) => {
  Cart.findById(req.params.id)
    .then(cart => {
      if (!cart) return res.status(404).json({ message: "Cart not found" });

      if (req.role !== "Admin" && cart.user.toString() !== req.userId) {
        return res.status(403).json({ message: "Access denied" });
      }

      next();
    })
    .catch(() => {
      res.status(500).json({ message: "Server error" });
    });
};
