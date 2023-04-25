import Orders from '../interfaces/Orders';
import OrdersModel from '../models/orders.model';
import connection from '../models/connection';

class OrdersService {
  model: OrdersModel;

  constructor(model = new OrdersModel(connection)) {
    this.model = model;
  }

  public async getOrders(): Promise<Orders[]> {
    return this.model.getOrders();
  }
  
  public newOrder = async (userId: number, products: number[]): Promise<Orders> => this.model
    .newOrder(userId, products);
}

export default OrdersService;