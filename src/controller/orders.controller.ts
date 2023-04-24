import { Request, Response } from 'express';
import OrdersService from '../service/orders.service';

class OrdersController {
  orderService: OrdersService;

  constructor(orderService = new OrdersService()) {
    this.orderService = orderService;
    this.getOrders = this.getOrders.bind(this);
  }

  async getOrders(req: Request, res: Response) { 
    const result = await this.orderService.getOrders();
    res.status(200).json(result);
  }
}

export default OrdersController;