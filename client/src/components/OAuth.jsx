import React from 'react'
import {app} from '../firebase.js';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { signInSuccess } from '../redux/user/userSlice.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function OAuth() {
  const disp = useDispatch();
  const navg = useNavigate();
  const handleGoogle = async(req,res) =>{
    try{
      const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    try{
      const res = await fetch('api/auth/google',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          e:result.user.email,
          u:result._tokenResponse.fullName,
          f:result._tokenResponse.firstName,
          l:result._tokenResponse.lastName,
          pt:result._tokenResponse.photoUrl
        })
    });
    const data = await res.json();
    console.log(data);
    disp(signInSuccess(data));
    navg('/');
    }
    catch(error){
      console.log("could not sign in",error);
    }
    }
    catch(error)
    {
      console.log("could not sign in",error);
    }
  }
  return (
    <button onClick={ handleGoogle } type="button" className="text-sm bg-red-600 text-white p-2 rounded-md hover:opacity-60">CONTINUE WITH GOOGLE</button>
  )
}

export default OAuth