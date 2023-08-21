"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const statusCodes_1 = __importDefault(require("./db/constants/statusCodes"));
require('dotenv/config');
require('./db/models');
const UserController = require('./db/controllers/UsersController');
const UserMiddlewares = require('./db/middlewares/UserMiddlewares');
require("express-async-errors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    app.use((0, cors_1.default)());
    next();
});
const PORT = process.env.SERVER_PORT;
app.get('/get-users', UserController.getUsers);
app.put('/update-user', UserMiddlewares.testUserUpdate, UserController.updateUser);
app.post('/create-user', UserMiddlewares.testUserCreate, UserController.createUser);
app.get('/', (_req, res) => {
    res.status(statusCodes_1.default.OK).send('Express');
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
exports.default = app;
