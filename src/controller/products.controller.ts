import { Request, Response } from 'express';
import ProductService from '../service/product.service';
import Product from '../interfaces/Product';

class ProductController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.newProduct = this.newProduct.bind(this);
  }

  async newProduct(req: Request, res: Response) { 
    const data: Product = req.body;
    const result = await this.productService.newProduct(data);
    res.status(201).json(result);
  }
}

export default ProductController;