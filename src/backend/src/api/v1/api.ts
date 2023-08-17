import 'express-async-errors';
import express from 'express';
import clientRoute from './routes/client';

const api = express();

api
  .use(express.json())
  .use('/clients', clientRoute);

export default api;
