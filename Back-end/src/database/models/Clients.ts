import { Model, DataTypes } from 'sequelize';
import sequelize from '.';

class Clients extends Model {
  public id!: number;
  public firstname!: string;
  public lastname!: string;
  public email!: string;
  public cpf!: string;
  public cellphone!: string;
  public status!: 'ativação_pendente' | 'ativo' | 'inativo' | 'desativado';
}

Clients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('ativação_pendente', 'ativo', 'inativo', 'desativado'),
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: sequelize,
    tableName: 'clients',
    modelName: 'clients',
    timestamps: false,
  }
);

export default Clients;
