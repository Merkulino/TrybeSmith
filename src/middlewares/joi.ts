import Joi from 'joi';
import LoginInput from '../interfaces/LoginInput';

const loginInputSchema = (body: LoginInput) => Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).validate(body);

export default loginInputSchema;
