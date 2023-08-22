import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class CustomerModel extends Model {
  declare readonly id: number;
  declare name: string;
  declare email: string;
  declare cpf: string;
  declare phone: string;
  declare status: string;
}

CustomerModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      allowNull: false,
      type: STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: STRING,
    },
    cpf: {
      allowNull: false,
      unique: true,
      type: STRING,
    },
    phone: {
      allowNull: false,
      unique: true,
      type: STRING,
    },
    status: {
      allowNull: false,
      defaultValue: 'Aguardando ativação',
      type: STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'CustomerModel',
    tableName: 'customers',
    timestamps: false,
  },
);

export default CustomerModel;
