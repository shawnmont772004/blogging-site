import express from 'express';
import { SignUpController } from '../controllers/auth.controller.js';
const authRouter = express.Router();

authRouter.post('/signup',SignUpController);

export default authRouter;