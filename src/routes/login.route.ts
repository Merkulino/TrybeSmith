import express from 'express';
import LoginController from '../controller/login.controller';
import validLoginInputs from '../middlewares/validation';

const router = express.Router();

const loginController = new LoginController();

router.post('/login', validLoginInputs, loginController.login);

export default router;