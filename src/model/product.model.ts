import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Product from '../interfaces/Product';

class ProductModel {
  connect: Pool;

  constructor(connect: Pool) {
    this.connect = connect;
  }

  public async getProductById(id: number): Promise<Product[]> {
    const [product] = await this.connect
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products WHERE id = ?', [id]);
    return product as Product[];
  }

  public async newProduct({ name, amount }: Product): Promise<Product> {
    const [{ insertId }] = await this.connect.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, name, amount };
  }
}

export default ProductModel;