import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../ErrorHandler/handlerError';

class ErrorHandlerMiddleware {
  static handle(
    err: ErrorHandler,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    } else if (err.name === 'SequelizeUniqueConstraintError') {
      return res
        .status(409)
        .json({ message: 'conflito de dados', conflicts: err.fields });
    } else {
      return res.status(500).json({ message: `${err.message}` });
    }
  }
}

export default ErrorHandlerMiddleware;
