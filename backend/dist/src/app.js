"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientRoute_1 = __importDefault(require("./routes/clientRoute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express_1.default.json());
app.get('/health', (req, res) => res.status(200).send());
app.use('/clients', clientRoute_1.default);
app.use((err, req, res) => {
    return res.status(500).json({ message: 'internal server error' });
});
exports.default = app;
