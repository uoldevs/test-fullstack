import 'express-async-errors';
import express from 'express';
import clientRoute from './routes/client';
import statusRoute from './routes/status';
import handleErrors from './middlewares/handleErrors';

const api = express();

api
  .use(express.json())
  .use('/clients', clientRoute)
  .use('/status', statusRoute)
  .use(handleErrors);

export default api;
