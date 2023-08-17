import express from 'express';
import clientRoute from './routes/clientRoute';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.status(200).send());
app.use('/clients', clientRoute);

export default app;