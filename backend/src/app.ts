import express from 'express';
import clientRoute from './routes/clientRoute';
import cors from 'cors';

const app = express();

app.use(cors({
	origin: 'http://localhost:3000',
	methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
	allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.get('/health', (req, res) => res.status(200).send());
app.use('/clients', clientRoute);

export default app;