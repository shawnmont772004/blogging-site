import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const SignUpController = async(req,res) =>{
    const { f,l,u,e,pn,p} = req.body;
    const hashedPassword = await bcryptjs.hash(p,10);
    try{
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
            res.status(201).send("user created");
        }
        catch(error)
        {
           res.status(500).send(error);
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }

}