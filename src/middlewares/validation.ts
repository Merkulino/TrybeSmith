import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';
import { loginInputSchema, productInputSchema, userInputSchema } from './joi';

const errorHandle = (error: ValidationError) => {
  if (error?.details[0].type === 'any.required') {
    return { code: 400, message: error.message };
  }
  return { code: 422, message: error.message };
};

const validLoginInputs = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  
  const { error } = loginInputSchema(data);
  if (error) return res.status(400).json({ message: error.message });

  next();
};

const validateProductsInputs = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  
  const { error } = productInputSchema(data);
  
  if (error) {
    const { code, message } = errorHandle(error);
    return res.status(code).json({ message });
  }

  next();
};

const validateUserInputs = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  
  const { error } = userInputSchema(data);

  if (error) {
    const { code, message } = errorHandle(error);
    return res.status(code).json({ message });
  }

  next();
};

export {
  validLoginInputs,
  validateProductsInputs,
  validateUserInputs,
};