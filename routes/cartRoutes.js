import express from 'express';
import {
  addToCart,
  removeFromCart,
  clearCart,
  syncCartWithStock,
  getCart,
  createCart
} from '../controllers/cartcontroller.js';

import { checkUser } from '../middlewares/checkUser.js';
import { checkCart } from '../middlewares/checkCart.js';

const router = express.Router();

router.route('/carts')
  .post(checkUser, createCart)
  .get(checkUser, getCart);

router.post('/carts/add', checkUser, checkCart, addToCart);
router.post('/carts/:id/remove', checkUser, checkCart, removeFromCart);
router.delete('/carts/:id', checkUser, checkCart, clearCart);

router.post('/carts/sync', checkUser, syncCartWithStock);

export default router;
