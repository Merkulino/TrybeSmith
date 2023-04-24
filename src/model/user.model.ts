import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/User';

class UserModel {
  connect: Pool;

  constructor(connect: Pool) {
    this.connect = connect;
  }

  public async newUser({ username, vocation, password, level }: User): Promise<number> {
    const [{ insertId }] = await this.connect.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, password, level) VALUES (?, ?, ?, ?)',
      [username, vocation, password, level],
    );
    return insertId;
  }
}

export default UserModel;