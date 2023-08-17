import { Request, Response } from 'express';
import UserService from '../service/UserService';
import { User, UserZodSchema } from '../types';

export default class UserController {
  private userData: User;

  constructor(private req: Request, private res: Response, private service: UserService) {
    this.req = req;
    this.res = res;
    this.userData = req.body;
  }

  async createUser() {
    const inputValidation = UserZodSchema.safeParse(this.userData);

    if (!inputValidation.success) {
      return this.res.status(400).json({
        field: inputValidation.error.issues[0].path,
        message: inputValidation.error.issues[0].message
      });
    }

    const results = await this.service.createUser(this.req.body);
    return this.res.status(201).json(results);
  }

  async getAll() {
    const results = await this.service.getAll();
    return this.res.status(201).json(results);
  }

  async updateUser() {
    const results = await this.service.updateUser(this.req.body);
    return this.res.status(201).json(results);
  }
}