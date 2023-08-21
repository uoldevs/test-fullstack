import mysql from 'mysql2/promise';
import executeQueries from './queryUtils';

const conn = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

executeQueries(conn);

export default conn;
