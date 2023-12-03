import mongoose from 'mongoose';

const userschema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:"string"
    },
    UserName:{
        type:"string",
        required:true,
        unique:true
    },
    EMail:{
        type:"string",
        required:true,
        unique:true
    },
    PhoneNumber:{
        type:"string",
        unique:true
    },
    Password:{
        type:"string",
        required:true
    }
},{timestamps:true});

const User = mongoose.model("User",userschema);
export default User;