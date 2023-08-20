"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class ClientValidator {
    constructor() {
        this.createSchema = joi_1.default.object({
            id: joi_1.default.number(),
            firstName: joi_1.default.string().required(),
            lastName: joi_1.default.string().required(),
            email: joi_1.default.string().email().required(),
            cpf: joi_1.default.string().pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).required(),
            cellphone: joi_1.default.string().pattern(/^\(\d{2}\)\d{4}-\d{4}$/).required(),
            status: joi_1.default.string().valid('ativação_pendente', 'ativo', 'inativo', 'desativado').required(),
        });
    }
    validateData(data) {
        const result = this.createSchema.validate(data);
        return result;
    }
}
exports.default = ClientValidator;
