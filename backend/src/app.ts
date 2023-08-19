import express from 'express';
import conn from './database/connection';
console.log(conn);

const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.status(200).send('Server is online!'));

export default app;
