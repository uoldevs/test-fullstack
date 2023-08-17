"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientRoute_1 = __importDefault(require("./routes/clientRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/health', (req, res) => res.status(200).send());
app.use('/client', clientRoute_1.default);
exports.default = app;
