import { DataSource } from 'typeorm';
import 'reflect-metadata';
import 'dotenv/config';

const port = process.env.DB_PORT as number | undefined;

// eslint-disable-next-line import/prefer-default-export
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/entity/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`]
});
