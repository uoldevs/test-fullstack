import express, { NextFunction, Request, Response } from 'express';
import conn from './database/connection';
import cors from 'cors';
import { ZodError } from 'zod';
import ClientController from './controllers/ClientController';
import HttpError from './Errors/HttpError';

const app = express();
app.use(express.json());
app.use(cors());

const clientController = new ClientController();

app.get('/clients', (req, res, next) => clientController.list(req, res, next));

app.get('/clients/:id', (req, res, next) =>
  clientController.findById(req, res, next)
);

app.post('/clients', (req, res, next) =>
  clientController.create(req, res, next)
);

app.put('/clients/:id', (req, res, next) =>
  clientController.update(req, res, next)
);

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
