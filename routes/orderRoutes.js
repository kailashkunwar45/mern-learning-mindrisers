
import express from 'express';
import { createOrder, getOrders, getOrder, updateOrder, deleteOrder } from '../controllers/orderController.js';

import { checkOrder } from '../middlewares/checkOrder.js';
import { checkUser } from '../middlewares/checkUser.js';

const router = express.Router();

router.route('/orders')
  .post(checkUser, createOrder)
  .get(getOrders);

router.route('/orders/:id')
  .get(checkUser, checkOrder, getOrder)
  .patch(checkUser, checkOrder, updateOrder)
  .delete(checkUser, checkOrder, deleteOrder);

export default router;