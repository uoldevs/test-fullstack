import { Request, Response } from 'express';
import ErrorHandler from '../ErrorHandler/handlerError';

class ErrorHandlerMiddleware {
  public handle(err: ErrorHandler, _req: Request, res: Response,) {
    console.log(err)
    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    } else if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: `${err}` });
    }else {
      return res.status(500).json({ message: `${err}` });
    }
  }
}

export default new ErrorHandlerMiddleware();