const UsersService = require("../services/UsersService");
import statusCodes from '../constants/statusCodes';

import { Request, Response } from "express";

async function getUsers(req: Request, res: Response) {
    try {
    const users = await UsersService.getUsers();
    if (!users || users.length === 0) return res.status(statusCodes.BAD_REQUEST).json({ message: 'Nenhum usuário encontrado!' });
    else {
      return res.status(statusCodes.OK).json(users);
    }
  } catch (err) {
    console.log(err);
    return res.status(statusCodes.SERVER_ERROR).json({ message: err });
  }
}

async function createUser(req: Request, res: Response) {
  try {
    const user = await UsersService.createUser(req.body);
    if(user) return res.status(statusCodes.OK).json(user);
    return res.status(statusCodes.BAD_REQUEST).json({ message: "O usuário já existe!"});
  } catch (err) {
    console.log(err);
    return res.status(statusCodes.SERVER_ERROR).json({ message: err });
  }
};

async function updateUser(req: Request, res: Response) {
  try {
    const user = await UsersService.updateUser(req.body);
    if(user) return res.status(statusCodes.OK).json(user);
    return res.status(statusCodes.BAD_REQUEST).json({ message: "Usuário não encontrado!"});
  } catch (err) {
    console.log(err);
    return res.status(statusCodes.SERVER_ERROR).json({ message: err });
  }
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
  };