import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createClient } from './validations/createClient.validations';
import cpfValidator from '../../../shared/utils/cpfValidator';
import { updateClient } from './validations/updateClient.validations';

@Injectable()
export default class ClientMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction) {
    const middlewaresFunctions = {
      POST: () => {
        this.createClient(req);
      },

      PATCH: () => {
        this.updateClient(req);
      },
    };

    middlewaresFunctions[req.method]();

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

  public updateClient(req: Request) {
    const validation = updateClient.validate(req.body);

    if (!!validation.error) {
      throw new BadRequestException(validation.error.message);
    }

    if (!!req.body.cpf) {
      if (!cpfValidator(req.body.cpf)) {
        throw new BadRequestException('Cpf inválido');
      }
    }
  }
}
