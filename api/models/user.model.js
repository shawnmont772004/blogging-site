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
    },
    ProfilePic:{
        type:"string",
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
},{timestamps:true});

const User = mongoose.model("User",userschema);
export default User;