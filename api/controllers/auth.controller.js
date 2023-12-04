import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

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