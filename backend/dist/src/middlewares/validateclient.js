"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_check_1 = require("cpf-check");
const validatePhoneNumber_1 = __importDefault(require("../utils/validatePhoneNumber"));
const validateClient = (req, res, next) => {
    const { email, name, cpf, phone, status } = req.body;
    const regex = /\S+@\S+\.\S+/;
    if (!email || !name || !cpf || !phone || !status) {
        return res.status(400).json({ message: 'All fields must be filled' });
    }
    if (!regex.test(email)) {
        return res.status(401).json({ message: 'Invalid email' });
    }
    if (!(0, cpf_check_1.validate)(cpf)) {
        return res.status(401).json({ message: 'Invalid cpf' });
    }
    if (!(0, validatePhoneNumber_1.default)(phone)) {
        return res.status(401).json({ message: 'Invalid phone number' });
    }
    console.log('hello');
    next();
};
exports.default = validateClient;
