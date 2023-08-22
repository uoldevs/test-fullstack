import Joi from 'joi';
import IClient from '../interfaces/IClient';

export default class ClientValidator {
  createSchema: Joi.ObjectSchema<IClient>;
  idSchema: Joi.NumberSchema<number>;
  constructor() {
    this.idSchema = Joi.number().required();
    this.createSchema = Joi.object({
      id: Joi.number(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      cpf: Joi.string()
        .pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
        .required(),
      cellphone: Joi.string()
        .pattern(/^\(\d{2}\)\d{4}-\d{4}$/)
        .required(),
      status: Joi.string()
        .valid('ativação_pendente', 'ativo', 'inativo', 'desativado')
        .required(),
    });
  }

  public validateData(data: IClient) {
    return this.createSchema.validate(data);
  }
  public validateId(id: number) {
    return this.idSchema.validate(id);
  }
}
