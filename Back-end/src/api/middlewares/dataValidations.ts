import { Request, Response, NextFunction } from 'express';
import ClientValidator from '../validation/JoiClientSchemas';
import IClient from '../interfaces/IClient';
import ErrorHandler from '../ErrorHandler/handlerError';

class MiddlewareValidation {
    constructor(public clientValidator =  new ClientValidator()) {}

    public creationValidator = (req: Request, _res: Response, next: NextFunction) => {
        const client:IClient = req.body;
        const {error} = this.clientValidator.validateData(client);
        console.log(error?.details)
        if (error) {
            throw new ErrorHandler(400, `Ínvalido: ${error.details[0].context?.label}`);
        }
        next();
    }
}

export default MiddlewareValidation;