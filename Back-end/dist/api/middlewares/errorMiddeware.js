"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandlerMiddleware {
    static handle(err, _req, res, _next) {
        if (err.status) {
            return res.status(err.status).json({ message: err.message });
        }
        else if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ message: 'conflito de dados' });
        }
        else {
            return res.status(500).json({ message: `${err.message}` });
        }
    }
}
exports.default = ErrorHandlerMiddleware;
