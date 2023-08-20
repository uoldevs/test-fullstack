import 'express-async-errors';
import express from 'express';
import apiV1 from './v1/api';

const app = express();

app.use('/api/v1', apiV1);

export default app;
