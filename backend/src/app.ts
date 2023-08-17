import cors from 'cors';
import express from 'express';
import UserController from './controller/UserController';
import UserService from './model/UserService';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/create', (req, res) => new UserController(req, res, new UserService()).createUser());

export default app;