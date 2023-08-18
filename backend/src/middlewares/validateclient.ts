import { NextFunction, Request, Response } from 'express';
import { validate } from 'cpf-check';
import validatePhoneNumber from '../utils/validatePhoneNumber';


const validateClient = (req: Request, res: Response, next: NextFunction) => {
	const { email, name, cpf, phone, status } = req.body;
	const regex = /\S+@\S+\.\S+/;
	if (!email || !name || !cpf || !phone || !status) {
		return res.status(400).json({ message: 'All fields must be filled' });
	}
	if (!regex.test(email)) {
		return res.status(401).json({ message: 'Invalid email' });
	}
	if (!validate(cpf)) {
		return res.status(401).json({ message: 'Invalid cpf' });
	}
	if (!validatePhoneNumber(phone)) {
		return res.status(401).json({ message: 'Invalid phone number' });
	}
	next();
};

export default validateClient;