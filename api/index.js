import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter  from './routes/user.route.js';

dotenv.config();
const app = express();


app.listen(3000,()=>{
    console.log("Server is running at 3000!");
})

mongoose.connect(process.env.DB_KEY).then(()=>{
    console.log("Connected to Database.")
}).catch((err)=>{
    console.log(err);
})

app.use('/api/user',userRouter);
