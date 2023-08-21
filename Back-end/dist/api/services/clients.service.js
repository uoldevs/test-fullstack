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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Clients_1 = __importDefault(require("../../database/models/Clients"));
const sequelize_1 = require("sequelize");
class ClientsService {
    constructor(clientsModel = Clients_1.default) {
        this.clientsModel = clientsModel;
        this.getClients = () => __awaiter(this, void 0, void 0, function* () { return yield this.clientsModel.findAll(); });
        this.createClient = (client) => __awaiter(this, void 0, void 0, function* () {
            return yield this.clientsModel.create(Object.assign({}, client));
        });
        this.updateClient = (_a) => __awaiter(this, void 0, void 0, function* () {
            var { id } = _a, client = __rest(_a, ["id"]);
            const [updatedRows] = yield this.clientsModel.update(client, {
                where: {
                    id: {
                        [sequelize_1.Op.eq]: id,
                    },
                },
            });
            if (updatedRows === 0) {
                return null;
            }
            return updatedRows;
        });
        this.deleteClient = (id) => __awaiter(this, void 0, void 0, function* () {
            const deletedRows = yield this.clientsModel.destroy({
                where: {
                    id,
                },
            });
            if (deletedRows === 0) {
                return null;
            }
            return deletedRows;
        });
    }
}
exports.default = ClientsService;
