import { Request, Response } from "express";
import * as express from 'express'

export async function testUserCreate(req: Request, res: Response, next: express.NextFunction) {
    try {
    const { username, email, cpf, status, phone } = req.body
    if(!username || typeof username !== 'string') return res.status(400).json({ message: "O username é obrigatório e deve ser uma string." });
    if(!email || typeof email !== 'string') return res.status(400).json({ message: "O email é obrigatório e deve ser uma string." });
    if(!cpf || typeof cpf !== 'string') return res.status(400).json({ message: "O cpf é obrigatório e deve ser uma string." });
    if(!status || typeof status !== 'string') return res.status(400).json({ message: "O status é obrigatório e deve ser uma string." });
    if(!phone || typeof phone !== 'string') return res.status(400).json({ message: "O phone é obrigatório e deve ser uma string." });

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

export async function testUserUpdate(req: Request, res: Response, next: express.NextFunction) {
  try {
  const { id, username, email, cpf, status, phone } = req.body
  if(!username || typeof username !== 'string') return res.status(400).json({ message: "O username é obrigatório e deve ser uma string." });
  if(!email || typeof email !== 'string') return res.status(400).json({ message: "O email é obrigatório e deve ser uma string." });
  if(!cpf || typeof cpf !== 'string') return res.status(400).json({ message: "O cpf é obrigatório e deve ser uma string." });
  if(!status || typeof status !== 'string') return res.status(400).json({ message: "O status é obrigatório e deve ser uma string." });
  if(!phone || typeof phone !== 'string') return res.status(400).json({ message: "O phone é obrigatório e deve ser uma string." });
  if(!id || typeof id !== 'number') return res.status(400).json({ message: "O id é obrigatório e deve ser um number." });
  next();
} catch (err) {
  console.log(err);
  return res.status(500).json({ message: err });
}
}