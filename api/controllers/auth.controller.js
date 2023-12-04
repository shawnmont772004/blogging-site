import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {errorHandler} from "../utils/error.js";

export const SignUpController = async(req,res,next) =>{
    const { f,l,u,e,pn,p } = req.body;
    const hashedPassword = await bcryptjs.hashSync(p,10);
        const newuser = new User({
            FirstName:f,
            LastName:l,
            UserName:u,
            EMail:e,
            PhoneNumber:pn,
            Password:hashedPassword
        })
        try{
            await newuser.save();
            res.status(201).json("user created");
        }
        catch(error)
        {
           next(error);
        }
    }

export const SignInController = async(req,res,next) => {
    const {e,p} = req.body;
    try{
        const validUser= await User.findOne({EMail:e});
        if(!validUser)
        {
            return res.status(404).json("invalid user");
        }
        else{
            const validPassword = await bcryptjs.compareSync(p,validUser.Password);
                if(!validPassword){
                    next(errorHandler(404,"Wrong credentials"));
                }
                else{
                    res.status(200).json("user logged in succesfully");
                    

                } 
            }
    }
    catch(error)
    {
        next(error);
    }
}