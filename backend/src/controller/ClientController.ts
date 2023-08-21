import { Request, Response } from "express";
import HttpException from "../utils/httpException";
import ClientService from "../service/ClientService";
import { Client, ClientZodSchema } from "../types";

export default class ClientController {
  private clientData: Client;

  constructor(
    private req: Request,
    private res: Response,
    private service: ClientService,
  ) {
    this.req = req;
    this.res = res;
    this.clientData = req.body;
  }

  async create() {
    const inputValidation = ClientZodSchema.safeParse(this.clientData);

    if (!inputValidation.success) {
      throw new HttpException(
        400,
        `field: ${inputValidation.error.issues[0].path}, message: ${inputValidation.error.issues[0].message}`,
      );
    }

    const results = await this.service.create(this.req.body);
    console.log(results);

    return this.res.status(201).json(results);
  }

  async getAll() {
    const results = await this.service.getAll();
    return this.res.status(200).json(results);
  }

  async update() {
    const inputValidation = ClientZodSchema.safeParse(this.clientData);

    if (!inputValidation.success) {
      throw new HttpException(
        400,
        `field: ${inputValidation.error.issues[0].path}, message: ${inputValidation.error.issues[0].message}`,
      );
    }

    const results = await this.service.update(this.req.body);
    return this.res.status(201).json(results);
  }
}
