import { RequestHandler } from "express";
import UserService from "../service/user.service";

export default class UserController {
  constructor(private userService = new UserService()) {
  }
  public findAll: RequestHandler = async (req, res) => {
    const users = await this.userService.findAll();

    return res.status(200).json(users);
  }
  public findById: RequestHandler = async (req, res) => {
    const { id } = req.params
    const user = await this.userService.findById(+id);

    return res.status(200).json(user)
  }
  public updateById: RequestHandler = async (req, res) => {
    const updatedUser = await this.userService.updateById(req.body)

    return res.status(200).json(updatedUser)
  }

  public create: RequestHandler = async (req, res) => {
    const newUser = await this.userService.create(req.body)

    return res.status(201).json(newUser)
  }

  public deleteById: RequestHandler = async (req, res) => {
    const { id } = req.params
    const deletedUser = await this.userService.delete(+id)

    return res.status(204).json(deletedUser)
  }
}