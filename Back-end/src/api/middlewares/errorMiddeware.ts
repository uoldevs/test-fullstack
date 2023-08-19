import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../ErrorHandler/handlerError';

class ErrorHandlerMiddleware {
  public handle(err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) {
    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    } else {
      return res.status(500).json({ message: `${err}` });
    }
  }
}

export default new ErrorHandlerMiddleware();