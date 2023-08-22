"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler extends Error {
    constructor(status, message) {
        super();
        this.message = message;
        this.status = status;
        this.fields = [];
    }
}
exports.default = ErrorHandler;
