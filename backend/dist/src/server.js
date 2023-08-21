"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3005;
const server = app_1.default.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
exports.default = server;
