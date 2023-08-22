const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      telefone: DataTypes.STRING,
      status: DataTypes.STRING,
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });

    return User;
  };

  module.exports = UserModel;
