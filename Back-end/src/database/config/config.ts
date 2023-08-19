import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: '123456',
  database: 'uol_clients',
  host: 'localhost',
  storage: 'db.sqlite',
  dialect: 'sqlite',
  logging: false,
}

module.exports = config;
