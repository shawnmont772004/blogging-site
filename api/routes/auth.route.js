import express from 'express';
import { SignInController, SignUpController, googleAuthController } from '../controllers/auth.controller.js';
const authRouter = express.Router();

authRouter.post('/signup',SignUpController);
authRouter.post('/signin',SignInController);
authRouter.post('/google',googleAuthController);

export default authRouter;