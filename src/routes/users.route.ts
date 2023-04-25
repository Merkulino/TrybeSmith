import express from 'express';
import UserController from '../controller/users.controller';
import { validateUserInputs } from '../middlewares/validation';

const router = express.Router();

const userController = new UserController();

router.post('/users', validateUserInputs, userController.newUser);

export default router;