import Product from '../interfaces/Product';
import ProductModel from '../models/product.model';
import connection from '../models/connection';

class ProductService {
  model: ProductModel;

  constructor(model = new ProductModel(connection)) {
    this.model = model;
  }

  public async getProducts(): Promise<Product[]> {
    return this.model.getProducts();
  }

  public async newProduct(data: Product): Promise<Product> {
    return this.model.newProduct(data);
  }
}

export default ProductService;