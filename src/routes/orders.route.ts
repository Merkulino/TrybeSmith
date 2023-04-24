import express from 'express';
import OrdersController from '../controller/orders.controller';

const router = express.Router();

const productController = new OrdersController();

router.get('/orders', productController.getOrders);

export default router;