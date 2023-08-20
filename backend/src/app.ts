import express, { NextFunction, Request, Response } from 'express';
import conn from './database/connection';
import cors from 'cors';
import { ZodError } from 'zod';
import {
  createClient,
  findClient,
  listClients,
  updateClient,
} from './controllers/ClientController';
import HttpError from './Errors/HttpError';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/clients', listClients);

app.get('/clients/:id', findClient);

app.post('/clients', createClient);

app.put('/clients/:id', updateClient);

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

console.log(conn);
export default app;
