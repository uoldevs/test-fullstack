"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Clients extends sequelize_1.Model {
}
Clients.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    cpf: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    cellphone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('ativação_pendente', 'ativo', 'inativo', 'desativado'),
        defaultValue: 'ativação_pendente',
    },
}, {
    underscored: true,
    sequelize: _1.default,
    tableName: 'clients',
    modelName: 'clients',
    timestamps: false,
});
exports.default = Clients;
