"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientRoute_1 = __importDefault(require("./routes/clientRoute"));
// import cors from 'cors';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/health', (req, res) => res.status(200).send());
app.use('/clients', clientRoute_1.default);
exports.default = app;
