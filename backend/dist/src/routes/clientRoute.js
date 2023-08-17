"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientController_1 = __importDefault(require("../controllers/ClientController")); // Importe o controlador corretamente
const clientRoute = (0, express_1.Router)();
const controller = new ClientController_1.default();
clientRoute.get('/clients', controller.getAll); // Use o método correto do controlador
exports.default = clientRoute;
