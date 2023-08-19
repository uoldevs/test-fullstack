"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandlerMiddleware {
    handle(err, _req, res, _next) {
        if (err.status) {
            return res.status(err.status).json({ message: err.message });
        }
        else {
            return res.status(500).json({ message: err });
        }
    }
}
exports.default = new ErrorHandlerMiddleware();
