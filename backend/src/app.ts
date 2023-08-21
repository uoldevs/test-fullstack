import express, { Request, Response } from 'express';
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

app.use((err: Error, req: Request, res: Response) => {
	return res.status(500).json({ message: 'internal server error' });
});
export default app;