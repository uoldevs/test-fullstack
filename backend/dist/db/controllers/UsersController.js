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
const UsersService = require("../services/UsersService");
const statusCodes_1 = __importDefault(require("../constants/statusCodes"));
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield UsersService.getUsers();
            if (!users || users.length === 0)
                return res.status(statusCodes_1.default.BAD_REQUEST).json({ message: 'Nenhum usuário encontrado!' });
            else {
                return res.status(statusCodes_1.default.OK).json(users);
            }
        }
        catch (err) {
            console.log(err);
            return res.status(statusCodes_1.default.SERVER_ERROR).json({ message: err });
        }
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UsersService.createUser(req.body);
            if (user)
                return res.status(statusCodes_1.default.OK).json(user);
            return res.status(statusCodes_1.default.BAD_REQUEST).json({ message: "O usuário já existe!" });
        }
        catch (err) {
            console.log(err);
            return res.status(statusCodes_1.default.BAD_REQUEST).json(err);
        }
    });
}
;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UsersService.updateUser(req.body);
            if (user)
                return res.status(statusCodes_1.default.OK).json(user);
            return res.status(statusCodes_1.default.BAD_REQUEST).json({ message: "Usuário não encontrado!" });
        }
        catch (err) {
            console.log(err);
            return res.status(statusCodes_1.default.BAD_REQUEST).json(err);
        }
    });
}
;
module.exports = {
    getUsers,
    createUser,
    updateUser,
};
