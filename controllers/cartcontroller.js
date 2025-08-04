import Cart from "../models/cart.js";
import Product from "../models/Product.js";

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const detailedProducts = await Promise.all(
      cart.products.map(async (item) => {
        const product = await Product.findById(item.product);
        return {
          product: product ? {
            _id: product._id,
            title: product.title,
            price: product.price,
            stock: product.stock,
          } : null,
          quantity: item.quantity,
          price: item.price,
          lineTotal: item.price,
        };
      })
    );

    const cartTotal = detailedProducts.reduce((sum, item) => sum + (item.lineTotal || 0), 0);

    res.status(200).json({
      user: cart.user,
      products: detailedProducts,
      cartTotal,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to get cart", error: err.message });
  }
};

export const createCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { products } = req.body;
    const existingCart = await Cart.findOne({ user: userId });
    if (existingCart) {
      return res.status(400).json({ message: "Cart already exists for this user" });
    }
    const processedProducts = [];
    for (const item of products) {
      const product = await Product.findById(item.product);
      if (!product) continue;
      const quantity = item.quantity || 1;
      processedProducts.push({
        product: item.product,
        quantity,
        price: product.price * quantity,
      });
    }
    const cart = new Cart({ user: userId, products: processedProducts });
    await cart.save();
    res.status(201).json({ message: "Cart created", cart });
  } catch (err) {
    res.status(500).json({ message: "Failed to create cart", error: err.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(400).json({ message: "Product not found" });
    const qtyToAdd = quantity || 1;

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({
        user: userId,
        products: [{ product: productId, quantity: qtyToAdd, price: product.price * qtyToAdd }],
      });
    } else {
      const existingIndex = cart.products.findIndex(p => p.product.toString() === productId);
      if (existingIndex > -1) {
        cart.products[existingIndex].quantity += qtyToAdd;
        cart.products[existingIndex].price = product.price * cart.products[existingIndex].quantity;
      } else {
        cart.products.push({ product: productId, quantity: qtyToAdd, price: product.price * qtyToAdd });
      }
    }
    await cart.save();
    res.status(200).json({ message: "Cart updated", cart });
  } catch (err) {
    res.status(500).json({ message: "Failed to update cart", error: err.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.body;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter(p => p.product.toString() !== productId);
    await cart.save();
    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (err) {
    res.status(500).json({ message: "Failed to remove product", error: err.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    const userId = req.userId;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = [];
    await cart.save();
    res.status(200).json({ message: "Cart cleared", cart });
  } catch (err) {
    res.status(500).json({ message: "Failed to clear cart", error: err.message });
  }
};

export const syncCartWithStock = async (req, res) => {
  try {
    const userId = req.userId;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    for (let item of cart.products) {
      const product = await Product.findById(item.product);
      if (!product) {
        cart.products = cart.products.filter(p => p.product.toString() !== item.product.toString());
        continue;
      }
      item.price = product.price * item.quantity;

      if (product.stock !== undefined && item.quantity > product.stock) {
        item.quantity = product.stock;
        item.price = product.price * item.quantity;
      }
    }
    await cart.save();
    res.status(200).json({ message: "Cart synced with stock", cart });
  } catch (err) {
    res.status(500).json({ message: "Failed to sync cart", error: err.message });
  }
};
