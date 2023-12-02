import { usercontroller} from '../controllers/user.controller.js';
import express from 'express';

const userRouter = express.Router();

userRouter.get('/test',usercontroller);

export default userRouter;