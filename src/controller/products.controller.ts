import { Request, Response } from 'express';
import ProductService from '../service/product.service';
import Product from '../interfaces/Product';

class ProductController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.getProducts = this.getProducts.bind(this);
    this.newProduct = this.newProduct.bind(this);
  }

  async getProducts(_req: Request, res: Response) {
    const result = await this.productService.getProducts();
    res.status(200).json(result);
  }

  async newProduct(req: Request, res: Response) { 
    const data: Product = req.body;
    const result = await this.productService.newProduct(data);
    res.status(201).json(result);
  }
}

export default ProductController;