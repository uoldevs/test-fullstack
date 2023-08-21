const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  static init(sequelize: any) {
    super.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        cpf: DataTypes.STRING,
        status: DataTypes.STRING,
        phone: DataTypes.STRING,
      },
      {
        timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
        tableName: "Users",
        underscored: true,
        sequelize
      }
    );
  }
}

export {};

module.exports = Users;
