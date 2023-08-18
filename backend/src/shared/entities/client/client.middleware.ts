import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createClient } from './validations/createClient.validations';
import cpfValidator from 'src/shared/utils/cpfValidator';

@Injectable()
export default class ClientMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction) {
    const middlewaresFunctions = {
      POST: this.createClient(req),
    };

    middlewaresFunctions[req.method];

    return next();
  }

  public createClient(req: Request) {
    const validation = createClient.validate(req.body);

    if (!!validation.error) {
      throw new BadRequestException(validation.error.message);
    }

    if (!cpfValidator(req.body.cpf)) {
      throw new BadRequestException('Cpf inválido');
    }
  }
}
