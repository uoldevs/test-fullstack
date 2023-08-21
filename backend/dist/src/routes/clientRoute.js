"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientController_1 = __importDefault(require("../controllers/ClientController"));
const validateclient_1 = __importDefault(require("../middlewares/validateclient"));
const clientRoute = (0, express_1.Router)();
const controller = new ClientController_1.default();
clientRoute.get('/', (req, res, next) => controller.getAll(req, res, next));
clientRoute.post('/', (req, res, next) => (0, validateclient_1.default)(req, res, next), (req, res, next) => controller.create(req, res, next));
clientRoute.put('/:id', (req, res, next) => (0, validateclient_1.default)(req, res, next), (req, res, next) => controller.update(req, res, next));
exports.default = clientRoute;
