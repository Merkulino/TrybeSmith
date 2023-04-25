import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Orders from '../interfaces/Orders';

class OrdersModel {
  connect: Pool;

  constructor(connect: Pool) {
    this.connect = connect;
  }

  public async getOrders(): Promise<Orders[]> {
    const [orders] = await this.connect
      .execute<RowDataPacket[]>(
      `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds 
       FROM Trybesmith.orders AS o 
       INNER JOIN Trybesmith.products AS p 
       ON o.id = p.order_id 
       GROUP BY p.order_id`,
    );
    return orders as Orders[];
  }

  public newOrder = async (userId: number, products: number[]): Promise<Orders> => {
    console.log(userId, products);
    const [{ insertId }] = await this.connect
      .execute<ResultSetHeader>('INSERT INTO Trybesmith.orders (user_id) VALUES (?)', [userId]);
    
    products.forEach(async (productId) => {
      await this.connect
        .execute<ResultSetHeader>(
        `UPDATE Trybesmith.products
        SET order_id = ?
        WHERE products.id = ?;`,
        [insertId, productId],
      );
    });

    return { userId, productsIds: products } as Orders;
  };
}

export default OrdersModel;