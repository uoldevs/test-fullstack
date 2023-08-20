"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class ClientValidator {
    constructor() {
        this.firstNameSchema = joi_1.default.string().required(),
            this.lastNameSchema = joi_1.default.string().required(),
            this.emailSchema = joi_1.default.string().email().required(),
            this.cpfSchema = joi_1.default.string().pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).required(),
            this.cellphoneSchema = joi_1.default.string().pattern(/^\(\d{2}\)\d{4}-\d{4}$/).required(),
            this.statusSchema = joi_1.default.string().valid('ativação_pendente', 'ativo', 'inativo', 'desativado').required(),
            this.createSchema = joi_1.default.object({
                firstName: this.firstNameSchema,
                lastName: this.lastNameSchema,
                email: this.emailSchema,
                cpf: this.cpfSchema,
                cellphone: this.cellphoneSchema,
                status: this.statusSchema,
            });
    }
    validateData(data) {
        const result = this.createSchema.validate(data);
        console.log(result);
        return result;
    }
}
exports.default = ClientValidator;
