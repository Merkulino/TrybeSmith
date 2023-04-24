import { Request, Response } from 'express';
import UserService from '../service/user.service';
import User from '../interfaces/User';

class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.newUser = this.newUser.bind(this);
  }

  async newUser(req: Request, res: Response) { 
    const data: User = req.body;
    const result = await this.userService.newUser(data);
    res.status(201).json({ token: result });
  }
}

export default UserController;