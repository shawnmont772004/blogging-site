import React from 'react'
import {app} from '../firebase.js';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
function OAuth() {

  const handleGoogle = async() =>{
    try{
      const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
    console.log(result);
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