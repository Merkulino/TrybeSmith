import { Request, Response } from 'express';
import LoginService from '../service/login.service';

class LoginController {
  loginService: LoginService;

  constructor(loginService = new LoginService()) {
    this.loginService = loginService;
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response) { 
    const data = req.body;
    const result = await this.loginService.login(data);
    res.status(200).json({ token: result });
  }
}

export default LoginController;