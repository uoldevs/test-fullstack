"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JoiClientSchemas_1 = __importDefault(require("../validation/JoiClientSchemas"));
const handlerError_1 = __importDefault(require("../ErrorHandler/handlerError"));
class MiddlewareValidation {
    constructor(clientValidator = new JoiClientSchemas_1.default()) {
        this.clientValidator = clientValidator;
        this.creationValidator = (req, _res, next) => {
            var _a;
            const client = req.body;
            const { error } = this.clientValidator.validateData(client);
            if (error) {
                throw new handlerError_1.default(400, `Ínvalido: ${(_a = error.details[0].context) === null || _a === void 0 ? void 0 : _a.label}`);
            }
            next();
        };
        this.validateDelete = (req, _res, next) => {
            var _a;
            const id = req.body.id;
            const { error } = this.clientValidator.validateId(id);
            if (error) {
                throw new handlerError_1.default(400, `Ínvalido: ${(_a = error.details[0].context) === null || _a === void 0 ? void 0 : _a.label}`);
            }
            next();
        };
    }
}
exports.default = MiddlewareValidation;
