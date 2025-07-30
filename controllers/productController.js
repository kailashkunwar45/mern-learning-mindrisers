import Product from "../models/product.js";





export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({
      products
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })

  }
}

export const getProduct = (req, res) => {
  const { id } = req.params;
  console.log(id);
  return res.status(200).json({
    message: 'welcome to product'
  });
}




export const createProduct = (req, res) => {
  return res.status(200).json({
    message: 'welcome to Create products'
  });
}


export const updateProduct = (req, res) => {
  return res.status(200).json({
    message: 'welcome to Update products'
  });
}


export const deleteProduct = (req, res) => {
  return res.status(200).json({
    message: 'welcome to Delete products'
  });
}



