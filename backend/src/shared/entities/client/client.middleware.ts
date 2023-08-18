import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createClient } from './validations/createClient.validations';

@Injectable()
export default class ClientMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const validation = createClient.validate(req.body);

    if (!!validation.error) {
      throw new BadRequestException(validation.error.message);
    }

    return next();
  }
}
