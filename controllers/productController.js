
import fs from 'fs';
import mongoose from "mongoose";
import Product from '../models/product.js';




export const getProducts = async (req, res) => {
  try {

    const products = await Product.find({});
    return res.status(200).json({
      products
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export const getProduct = (req, res) => {
  const { id } = req.params;

  return res.status(200).json({ message: 'Welcome To Product' });
}

export const createProduct = async (req, res) => {
  const { title, category, brand, stock, description, price } = req.body;
  try {

    await Product.create({
      title,
      brand,
      category,
      description,
      image: req.imagePath,
      price: price,
      stock: stock
    });
    return res.status(200).json({ message: 'Product Created Successfully' });

  } catch (error) {
    fs.unlink(`./uploads/${req.imagePath}`, (err) => {
      return res.status(500).json({ message: `${error}` });
    })


  }
}

export const updateProduct = (req, res) => {
  return res.status(200).json({ message: 'Welcome To Update Product' });
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid Product Id' });

  const product = await Product.findById(id);

  if (!product) return res.status(400).json({ message: 'Product Not Found' });


  fs.unlink(`./uploads/${product.image}`, async (err) => {
    if (err) return res.status(500).json({ message: `${err}` });
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Product Deleted Successfully' });
  })




}