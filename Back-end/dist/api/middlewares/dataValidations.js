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
            const client = req.body;
            const { error } = this.clientValidator.validateData(client);
            console.log(error);
            if (error) {
                throw new handlerError_1.default(400, `${error.details}`);
            }
            next();
        };
    }
}
exports.default = MiddlewareValidation;
