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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = exports.getUsers = void 0;
const Users = require("../models/Users");
const Sequelize = require("sequelize");
const config = require("../config/config");
const removePunctuation = (string) => {
    return string.replace(/[^\d]/g, '');
};
const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env]);
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield Users.findAll();
            return users.sort((a, b) => Number(a.id) - Number(b.id));
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.getUsers = getUsers;
function createUser(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const t = yield sequelize.transaction();
        try {
            const { username, email, phone, status, cpf } = body;
            const allUsers = yield Users.findAll();
            const { id } = allUsers[(allUsers.length - 1)];
            const checkEmail = yield Users.findOne({ where: { email } });
            const checkCpf = yield Users.findOne({ where: { cpf } });
            if (!checkEmail && !checkCpf) {
                const formatedCpf = removePunctuation(cpf);
                const formatedPhone = removePunctuation(phone);
                const create = yield Users.create({ id: (id + 1), username, email, phone: formatedPhone, status, cpf: formatedCpf }, { transaction: t });
                yield t.commit();
                return create;
            }
            yield t.rollback();
            return null;
        }
        catch (e) {
            yield t.rollback();
            console.log(e);
            throw e;
        }
    });
}
exports.createUser = createUser;
function updateUser(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const t = yield sequelize.transaction();
        try {
            const { id, username, email, phone, status, cpf } = body;
            const user = yield Users.findOne({ where: { id } });
            if (user) {
                const formatedCpf = removePunctuation(cpf);
                const formatedPhone = removePunctuation(phone);
                const create = yield user.update({ username, email, phone: formatedPhone, status, cpf: formatedCpf }, { transaction: t });
                yield t.commit();
                return create;
            }
            yield t.rollback();
            return null;
        }
        catch (e) {
            yield t.rollback();
            console.log(e);
            throw e;
        }
    });
}
exports.updateUser = updateUser;
