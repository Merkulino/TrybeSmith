import express from 'express';
import ProductController from '../controller/products.controller';

const router = express.Router();

const productController = new ProductController();

router.post('/products', productController.newProduct);

export default router;