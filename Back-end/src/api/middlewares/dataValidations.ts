import { Request, Response, NextFunction } from 'express';
import ClientValidator from '../validation/JoiClientSchemas';
import IClient from '../interfaces/IClient';
import ErrorHandler from '../ErrorHandler/handlerError';
import { number } from 'joi';

class MiddlewareValidation {
  constructor(private clientValidator = new ClientValidator()) {}

  public creationValidator = (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    const client: IClient = req.body;
    const { error } = this.clientValidator.validateData(client);
    if (error) {
      throw new ErrorHandler(
        400,
        `Ínvalido: ${error.details[0].context?.label}`
      );
    }
    next();
  };

  public validateDelete = (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    const id: number = req.body.id;
    const { error } = this.clientValidator.validateId(id);
    if (error) {
      throw new ErrorHandler(
        400,
        `Ínvalido: ${error.details[0].context?.label}`
      );
    }
    next();
  };
}

export default MiddlewareValidation;
