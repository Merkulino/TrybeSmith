import express from 'express';
import OrdersController from '../controller/orders.controller';
import { validateToken, validateOrdersInputs } from '../middlewares/validation';

const router = express.Router();

const productController = new OrdersController();

router.get('/orders', productController.getOrders);

router.post(
  '/orders', 
  validateToken,
  validateOrdersInputs,
  productController.newOrder,
);

export default router;