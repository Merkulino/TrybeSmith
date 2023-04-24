import Product from '../interfaces/Product';
import ProductModel from '../model/product.model';
import connection from '../model/connection';

class ProductService {
  model: ProductModel;

  constructor(model = new ProductModel(connection)) {
    this.model = model;
  }

  public async newProduct(data: Product): Promise<Product> {
    return this.model.newProduct(data);
  }
}

export default ProductService;