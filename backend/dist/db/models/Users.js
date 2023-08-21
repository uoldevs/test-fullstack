"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Model, DataTypes } = require("sequelize");
class Users extends Model {
    static init(sequelize) {
        super.init({
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
            status: DataTypes.STRING,
            phone: DataTypes.STRING,
        }, {
            timestamps: false,
            tableName: "Users",
            underscored: true,
            sequelize
        });
    }
}
module.exports = Users;
