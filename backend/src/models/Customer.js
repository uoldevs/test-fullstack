const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Customer extends Model {}

Customer.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	cpf: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	telephone: {
		type: DataTypes.STRING,
		allowNull: false,
    unique: true
	},
	status: {
		type: DataTypes.ENUM('Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'),
		allowNull: false
	},
}, {
	sequelize,
	modelName: 'Customer'
});

module.exports = Customer;
