import { Pool, RowDataPacket } from 'mysql2/promise';
import LoginInput from '../interfaces/LoginInput';
import User from '../interfaces/User';

class LoginModel {
  connect: Pool;

  constructor(connect: Pool) {
    this.connect = connect;
  }

  public async login({ username, password }: LoginInput): Promise<User[]> {
    const [user] = await this.connect.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );
    return user as User[];
  }
}

export default LoginModel;