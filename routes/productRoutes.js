

import express from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';
import { fileCheck, updateFileCheck } from '../middlewares/fileCheck.js';
import { checkAdmin, checkUser } from '../middlewares/checkUser.js';


const router = express.Router();

router.route('/products')
  .get(getProducts)
  .post(checkUser, checkAdmin, fileCheck, createProduct);
router.route('/products/:id')
  .get(getProduct)
  .patch(updateFileCheck, updateProduct)
  .delete(deleteProduct)


export default router;


