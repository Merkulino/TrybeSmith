import jwt from 'jsonwebtoken';
import LoginModel from '../models/login.model';
import connection from '../models/connection';
import LoginInput from '../interfaces/LoginInput';

const SECRET_KEY = process.env.JWT_SECRET || 'pswodsecrt';

class LoginService {
  model: LoginModel;

  constructor(model = new LoginModel(connection)) {
    this.model = model;
  }

  public async login(data: LoginInput): Promise<string | void> {
    const [result] = await this.model.login(data);
    if (result === undefined) throw new Error('UNAUTHORIZED');
    return jwt.sign({ id: result.id, username: result.username }, SECRET_KEY);
  }
}

export default LoginService;