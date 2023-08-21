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
const config_1 = __importDefault(require("./database/config"));
class ClientModel {
    constructor(dbInstance = config_1.default) {
        this.dbInstance = dbInstance;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT * FROM client';
            return yield new Promise((resolve, reject) => {
                this.dbInstance.all(sql, [], (err, rows) => {
                    if (err) {
                        return reject(err.message);
                    }
                    return resolve(rows);
                });
            });
        });
    }
    create(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO client (name, email, cpf, phone, status) VALUES (?, ?, ?, ?, ?)';
            const values = [client.name, client.email, client.cpf, client.phone, client.status];
            return yield new Promise((resolve, reject) => {
                this.dbInstance.run(sql, values, (err) => {
                    if (err) {
                        return reject(err.message);
                    }
                    return resolve();
                });
            });
        });
    }
    update(client, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'UPDATE client SET name = ?, email = ?, cpf = ?, phone = ?, status = ? WHERE id = ?';
            const values = [client.name, client.email, client.cpf, client.phone, client.status, id];
            return yield new Promise((resolve, reject) => {
                this.dbInstance.run(sql, values, function (err) {
                    if (err) {
                        return reject(err.message);
                    }
                    return resolve();
                });
            });
        });
    }
}
exports.default = ClientModel;
