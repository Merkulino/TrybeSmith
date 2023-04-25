import express from 'express';
import ProductController from '../controller/products.controller';
import { validateProductsInputs } from '../middlewares/validation';

const router = express.Router();

const productController = new ProductController();

router.get('/products', productController.getProducts);

router.post('/products', validateProductsInputs, productController.newProduct);

export default router;