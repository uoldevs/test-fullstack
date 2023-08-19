"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_service_1 = __importDefault(require("../services/clients.service"));
const handlerError_1 = __importDefault(require("../ErrorHandler/handlerError"));
class ClientController {
    constructor(_clientService = new clients_service_1.default()) {
        this._clientService = _clientService;
        this.getAllClients = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield this._clientService.getClients();
                throw new Error('error');
                return res.status(201).json(clients);
            }
            catch (err) {
                throw new handlerError_1.default(500, `${err}`);
            }
        });
    }
}
exports.default = ClientController;
