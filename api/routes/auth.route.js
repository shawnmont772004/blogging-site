import express from 'express';
import { SignInController, SignUpController } from '../controllers/auth.controller.js';
const authRouter = express.Router();

authRouter.post('/signup',SignUpController);
authRouter.post('/signin',SignInController);

export default authRouter;