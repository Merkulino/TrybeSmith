import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';
import jwt from 'jsonwebtoken';
import { loginInputSchema, productInputSchema, 
  userInputSchema, orderInputSchema } from './joi';

const SECRET_KEY = process.env.JWT_SECRET || 'pswodsecrt';

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

const validateOrdersInputs = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  
  const { error } = orderInputSchema(data);
  if (error) {
    const { code, message } = errorHandle(error);
    return res.status(code).json({ message });
  }

  next();
};

type PayloadType = {
  id: number,
  username: string,
  iat: number,
};

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decode: PayloadType = jwt.verify(token, SECRET_KEY) as PayloadType;
    req.body.currentUserId = decode.id;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export {
  validLoginInputs,
  validateProductsInputs,
  validateUserInputs,
  validateOrdersInputs,
  validateToken,
};