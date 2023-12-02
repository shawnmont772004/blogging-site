import mongoose from 'mongoose';


const userschema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String
    },
    UserName:{
        type:String,
        required:true,
        unique:true
    },
    EMail:{
        type:String,
        required:true,
        unique:true
    },
    PhoneNumber:{
        type:String,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
},{timeseries:true});

const User = mongoose.model("User",userschema);
export default User;