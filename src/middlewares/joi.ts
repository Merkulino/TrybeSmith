import Joi from 'joi';
import LoginInput from '../interfaces/LoginInput';
import Product from '../interfaces/Product';
import User from '../interfaces/User';

const loginInputSchema = (body: LoginInput) => Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).validate(body);

const productInputSchema = (body: Product) => Joi.object({
  id: Joi.number(),
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
  orderId: Joi.number(),
}).validate(body); 

const userInputSchema = (body: User) => Joi.object({
  id: Joi.number(),
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
}).validate(body); 

export { 
  loginInputSchema, 
  productInputSchema,
  userInputSchema,
};
