import express from 'express';
import UserController from '../controller/users.controller';

const router = express.Router();

const userController = new UserController();

router.post('/users', userController.newUser);

export default router;