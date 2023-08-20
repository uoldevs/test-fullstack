import { Options } from 'sequelize';

const config: Options = {
  storage: 'db.sqlite3',
  dialect: 'sqlite',
  logging: true,
};

module.exports = config;
