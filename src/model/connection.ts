import mysql from 'mysql2/promise'; 

export default mysql.createPool({
  port: 3306,
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  // database: process.env.DB_DATABASE,
});