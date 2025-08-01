import express from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';
import { fileCheck } from '../middlewares/fileCheck.js';


const router = express.Router();

router.route('/products').get(getProducts).post(fileCheck, createProduct);
router.route('/products/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)


export default router;


