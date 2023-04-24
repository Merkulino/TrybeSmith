import Orders from '../interfaces/Orders';
import OrdersModel from '../model/orders.model';
import connection from '../model/connection';

class OrdersService {
  model: OrdersModel;

  constructor(model = new OrdersModel(connection)) {
    this.model = model;
  }

  public async getOrders(): Promise<Orders[]> {
    return this.model.getOrders();
  }
}

export default OrdersService;