import { Sequelize } from 'sequelize';
import * as config from '../config/database';

const Users = require('./Users')
const connection = new Sequelize(config);

Users.init(connection);

module.exports = connection;