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
            next(errorHandler(404," Invalid User"));
        }
        else{
            const validPassword = await bcryptjs.compareSync(p,validUser.Password);
                if(!validPassword){
                    next(errorHandler(404,"Wrong credentials"));
                }
                else{
                    //res.status(200).json("user logged in succesfully"); cannot multiple responses
                    const token = jwt.sign({id:validUser._id},process.env.JWT_AUTH_KEY);
                    const {Password:pignore,PhoneNumber:pnoignore,...rest} = validUser._doc
                    res.cookie("access_token",token,{httpOnly:true}).status(201).json(rest); 
                } 
            }
    }
    catch(error)
    {
        next(error);
    }
}

export const googleAuthController = async(req,res,next) =>{
    const {e,f,u,l,pt} = req.body;
    try{
        const existUser = await User.findOne({EMail:e});

        if(existUser)
        {
            const token = jwt.sign({id:existUser._id},process.env.JWT_AUTH_KEY);
            const {Password:p,PhoneNumber:pignore,...rest} = existUser._doc;
            res.cookie("access_token",token,{httpOnly:true}).status(201).json(rest);
        }
        else{
            const genusername =  u.split(" ").join("") + Math.random().toString(36).slice(-4);
            const genpass = Math.random().toString(36).slice(-8);
            const bcryptpass = await bcryptjs.hashSync(genpass,10);
            const newUser = new User({EMail:e,UserName:genusername,FirstName:f,LastName:l,Password:bcryptpass,ProfilePic:pt});
            try{
                await newUser.save();
                const token=jwt.sign({id:newUser._id},process.env.JWT_AUTH_KEY);
                const {Password:pignore,...rest} = newUser._doc;
                res.cookie("access_token",token,{httpOnly:true}).status(201).json(rest);

            }
            catch(error)
            {
                next(error);
            }
        }
    }
    catch(error)
    {
        next(error);
    }
}