import Joi from 'joi';
import LoginInput from '../interfaces/LoginInput';
import Product from '../interfaces/Product';

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

export { 
  loginInputSchema, 
  productInputSchema,
};
