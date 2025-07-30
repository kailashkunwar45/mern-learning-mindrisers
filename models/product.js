import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["men's clothing", "women's clothing", "jewelery", "electronics"],
    required: true
  },
  brand: {
    type: String,
    enum: ["Levis", "Puma", "Zara", "Adidas", "Samsung", "Apple", "Lenovo", "Tanishq"],
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Product = mongoose.model("Product", productSchema);

export default Product









