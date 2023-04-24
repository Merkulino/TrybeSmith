import jwt from 'jsonwebtoken';
import User from '../interfaces/User';
import UserModel from '../models/user.model';
import connection from '../models/connection';

const SECRET_KEY = process.env.JWT_SECRET || 'pswodsecrt';

class UserService {
  model: UserModel;

  constructor(model = new UserModel(connection)) {
    this.model = model;
  }

  public async newUser(data: User): Promise<string> {
    const id = await this.model.newUser(data);
    return jwt.sign({ id, username: data.username }, SECRET_KEY);
  }
}

export default UserService;