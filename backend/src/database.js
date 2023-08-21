const { Sequelize } = require('sequelize');

const dbPath = './src/database/database.sqlite';
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: dbPath
});

module.exports = sequelize;