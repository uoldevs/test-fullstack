import { Response, Request, NextFunction } from 'express';
import customerSchema from '../../schemas/SchemaCustomer';

const validateCustomer = (req: Request, res: Response, next: NextFunction) => {
  const { error } = customerSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

export default validateCustomer;
