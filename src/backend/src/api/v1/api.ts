import 'express-async-errors';
import express from 'express';
import clientRoute from './routes/client';
import handleErrors from './middlewares/handleErrors';

const api = express();

api
  .use(express.json())
  .use('/clients', clientRoute)
  .use(handleErrors);

export default api;
