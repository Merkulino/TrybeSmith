import express from 'express';
import LoginController from '../controller/login.controller';

const router = express.Router();

const loginController = new LoginController();

router.post('/login', loginController.login);

export default router;