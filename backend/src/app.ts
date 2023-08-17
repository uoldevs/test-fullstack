import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import UserController from './controller/UserController';
import UserService from './service/UserService';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/create', (req, res) => new UserController(req, res, new UserService()).createUser());
app.get('/users', (req, res) => new UserController(req, res, new UserService()).getAll());

app.use(errorMiddleware);

export default app;