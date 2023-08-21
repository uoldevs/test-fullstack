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
exports.testUserUpdate = exports.testUserCreate = void 0;
function testUserCreate(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, email, cpf, status, phone } = req.body;
            if (!username || typeof username !== 'string')
                return res.status(400).json({ message: "O username é obrigatório e deve ser uma string." });
            if (!email || typeof email !== 'string')
                return res.status(400).json({ message: "O email é obrigatório e deve ser uma string." });
            if (!cpf || typeof cpf !== 'string')
                return res.status(400).json({ message: "O cpf é obrigatório e deve ser uma string." });
            if (!status || typeof status !== 'string')
                return res.status(400).json({ message: "O status é obrigatório e deve ser uma string." });
            if (!phone || typeof phone !== 'string')
                return res.status(400).json({ message: "O phone é obrigatório e deve ser uma string." });
            next();
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
exports.testUserCreate = testUserCreate;
function testUserUpdate(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, username, email, cpf, status, phone } = req.body;
            if (!username || typeof username !== 'string')
                return res.status(400).json({ message: "O username é obrigatório e deve ser uma string." });
            if (!email || typeof email !== 'string')
                return res.status(400).json({ message: "O email é obrigatório e deve ser uma string." });
            if (!cpf || typeof cpf !== 'string')
                return res.status(400).json({ message: "O cpf é obrigatório e deve ser uma string." });
            if (!status || typeof status !== 'string')
                return res.status(400).json({ message: "O status é obrigatório e deve ser uma string." });
            if (!phone || typeof phone !== 'string')
                return res.status(400).json({ message: "O phone é obrigatório e deve ser uma string." });
            if (!id || typeof id !== 'number')
                return res.status(400).json({ message: "O id é obrigatório e deve ser um number." });
            next();
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
exports.testUserUpdate = testUserUpdate;
