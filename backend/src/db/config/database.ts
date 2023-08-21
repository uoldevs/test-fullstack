import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.NODE_ENV === "test" ? process.env.PG_DATABASE_TEST : process.env.PG_DATABASE,
  host: process.env.NODE_ENV === "test" ? process.env.PG_HOST_TEST : process.env.PG_HOST,
  port: process.env.NODE_ENV === "test" ? Number(process.env.PG_PORT_TEST) : Number(process.env.PG_PORT),
  dialect: 'postgres',
}

export = config;