import { Request, Response, NextFunction } from 'express';
import LoginInputSchema from './joi';
import LoginInput from '../interfaces/LoginInput';

const validLoginInputs = async (req: Request, res: Response, next: NextFunction) => {
  const data: LoginInput = req.body;
  
  const { error } = LoginInputSchema(data);
  if (error) return res.status(400).json({ message: error.message });

  next();
};

export default validLoginInputs;