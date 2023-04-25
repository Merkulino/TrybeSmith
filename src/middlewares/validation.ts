import { Request, Response, NextFunction } from 'express';
import { loginInputSchema, productInputSchema } from './joi';
// import LoginInput from '../interfaces/LoginInput';
// import Product from '../interfaces/Product';

const validLoginInputs = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  
  const { error } = loginInputSchema(data);
  if (error) return res.status(400).json({ message: error.message });

  next();
};

const validateProductsInputs = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  
  const { error } = productInputSchema(data);
  
  if (error?.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.message });
  }
  if (error) return res.status(422).json({ message: error.message });

  next();
};

export {
  validLoginInputs,
  validateProductsInputs,
};