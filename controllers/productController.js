import Product from "../models/Product.js";
import fs from 'fs';
import mongoose from "mongoose";
import { removeImage } from "../utils/removeImage.js";




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

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    if (!mongoose.isValidObjectId(id)) {
      if (req.imagePath) removeImage(req.imagePath)
      return res.status(400).json({ message: 'Invalid Product Id' });
    }

    const product = await Product.findById(id);

    if (!product) {
      if (req.imagePath) removeImage(req.imagePath)
      return res.status(400).json({ message: 'Product Not Found' });
    }
    product.title = req.body?.title || product.title;
    product.category = req.body?.category || product.category;
    product.brand = req.body?.brand || product.brand;
    product.stock = req.body?.stock || product.stock;
    product.description = req.body?.description || product.description;
    product.price = req.body?.price || product.price;


    if (req.imagePath) {
      removeImage(product.image);
      product.image = req.imagePath;
    }
    await product.save();

    return res.status(200).json({ message: 'Product Updated Successfully' });


  } catch (err) {
    return res.status(500).json({ message: `${err}` });

  }


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