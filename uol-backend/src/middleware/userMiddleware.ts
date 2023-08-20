import { RequestHandler } from "express";
import { UserSchemaCreate, UserSchemaUpdate } from "../schemas/user.schema";
import UserModel from "../model/user.model";
import User from "../database/entity/User";

export default class UserMiddleware {
  constructor(
    private userModel = new UserModel()
  ) { }

  public validateBodyUpdate: RequestHandler = (req, _res, next) => {
    const parseResult = UserSchemaUpdate.safeParse(req.body);

    if (!parseResult.success) {
      return next(parseResult.error);
    }

    return next();
  }

  public validateBodyCreate: RequestHandler = (req, _res, next) => {
    const parseResult = UserSchemaCreate.safeParse(req.body);

    if (!parseResult.success) {
      return next(parseResult.error);
    }

    return next();
  }

  public verifyCredentialsExists: RequestHandler = async (req, _res, next) => {
    const { id, email } = req.body;
    const userByEmail = await this.userModel.findOneBy({ email }) as User;

    if (userByEmail && (!id || (id && userByEmail.id !== id))) {
      throw new Error('Email já existe');
    }

    const userByCpf = await this.userModel.findOneBy({ cpf: req.body.cpf }) as User;

    if (userByCpf && (!id || (id && userByCpf.id !== id))) {
      throw new Error('CPF já existe')
    }


    return next();
  }

  public verifyReqParams: RequestHandler = async (req, _res, next) => {
    const { id } = req.params;
    const digitRegex = /^\d+$/;

    if (!id) throw new Error('Missing id on params!');

    if (!digitRegex.test(id))
      throw new Error('ID params must be a digit');

    return next();
  };
}