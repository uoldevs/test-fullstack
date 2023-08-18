import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'password',
  database: 'postgres',
  entities: ['src/**/*.entity{.js,.ts}'],
};

export default new DataSource(dataSourceOptions);
