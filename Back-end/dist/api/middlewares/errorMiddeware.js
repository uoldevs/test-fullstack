"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandlerMiddleware {
    handle(err, _req, res) {
        console.log(err);
        if (err.status) {
            return res.status(err.status).json({ message: err.message });
        }
        else if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ message: `${err}` });
        }
        else {
            return res.status(500).json({ message: `${err}` });
        }
    }
}
exports.default = new ErrorHandlerMiddleware();
