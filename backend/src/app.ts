import express, { NextFunction, Request, Response } from 'express';
import conn from './database/connection';
import cors from 'cors';
import { ZodError } from 'zod';
import {
  createClient,
  listClients,
  updateClient,
} from './controllers/ClientController';
import HttpError from './Errors/HttpError';
console.log(conn);

const app = express();
app.use(express.json());
app.use(cors());

app.get('/client', listClients);

app.post('/client', createClient);

app.put('/client/:id', updateClient);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ZodError) {
    return res
      .status(400)
      .json({ path: err.errors[0].path[0], message: err.errors[0].message });
  }

  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal server error' });
});

export default app;
