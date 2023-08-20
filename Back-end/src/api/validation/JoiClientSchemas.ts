import Joi from 'joi';
import IClient from '../interfaces/IClient';

export default class ClientValidator {

    firstNameSchema: Joi.StringSchema<string>;
    lastNameSchema: Joi.StringSchema<string>;
    emailSchema: Joi.StringSchema<string>;
    cpfSchema: Joi.StringSchema<string>;
    cellphoneSchema: Joi.StringSchema<string>;
    statusSchema: Joi.StringSchema<string>;
    createSchema: Joi.ObjectSchema<IClient>
    constructor() {
        this.firstNameSchema = Joi.string().required(),
        this.lastNameSchema = Joi.string().required(),
        this.emailSchema = Joi.string().email().required(),
        this.cpfSchema = Joi.string().pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).required(),
        this.cellphoneSchema = Joi.string().pattern(/^\(\d{2}\)\d{4}-\d{4}$/).required(),
        this.statusSchema = Joi.string().valid('ativação_pendente', 'ativo', 'inativo', 'desativado').required(),
        this.createSchema = Joi.object({
            firstName: this.firstNameSchema,
            lastName: this.lastNameSchema,
            email: this.emailSchema,
            cpf: this.cpfSchema,
            cellphone: this.cellphoneSchema,
            status: this.statusSchema,
        })
    }
  
    public validateData(data: IClient) {
     const result = this.createSchema.validate(data);
     console.log(result)
     return result;
    }
  }