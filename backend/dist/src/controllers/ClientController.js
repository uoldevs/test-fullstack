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
const ClientService_1 = __importDefault(require("../services/ClientService"));
class ClientController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield new ClientService_1.default().getAll();
                return res.status(200).json(clients);
            }
            catch (err) {
                return err;
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new ClientService_1.default().create(req.body);
                res.status(201).json({ message: 'Client Created' });
            }
            catch (err) {
                return err;
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield new ClientService_1.default().update(req.body, Number(id));
                res.status(200).json({ message: 'Client updated' });
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.default = ClientController;
