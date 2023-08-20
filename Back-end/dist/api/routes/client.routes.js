"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_controller_1 = __importDefault(require("../controllers/clients.controller"));
const dataValidations_1 = __importDefault(require("../middlewares/dataValidations"));
const router = (0, express_1.Router)();
const clientController = new clients_controller_1.default();
const middlewareValidation = new dataValidations_1.default();
router.get('/', clientController.getAllClients);
router.post('/', middlewareValidation.creationValidator, clientController.createClient);
exports.default = router;
