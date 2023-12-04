import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData,setFormData] = useState({});
  const [load,setLoad]=useState(false);
  const [error,setError] =useState(null);

  const navg = useNavigate();
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    });
  }
  const handleSubmit = async(e) =>{
    setLoad(true);
    e.preventDefault();
    console.log(formData);
    try{
      const res = await fetch('api/auth/signup',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);

      if(data.success===false){
        setLoad(false);
        setError(data.message);
        return;
      }
      navg('/sign-in');
      setLoad(false);
      setError(null);
    }
    catch(error)
    {
      setLoad(false);
      setError(error.message);
    }
  }

  return (
    <>
    <div className=" flex justify-center mt-12 mb-12"> 
      <div className="bg-white md:w-1/3 w-96 rounded-lg text-black flex flex-col mx-auto gap-4">
        <h1 className="text-xl p-1 font-semibold flex  mx-auto mt-4">Sign up</h1>
        <form className="flex mx-auto flex-col w-64 gap-4 " onSubmit={handleSubmit}>
          <input type="text" placeholder="first name" className="border rounded-md p-1 border-slate-800 focus:outline-none hover:bg-opacity-80" id="f" onChange={handleChange} />
          <input type="text" placeholder="last name" className="border rounded-md p-1 border-slate-800 focus:outline-none hover:bg-opacity-80" id="l" onChange={handleChange} />
          <input type="text" placeholder="user name" className="border rounded-md p-1 border-slate-800 focus:outline-none hover:bg-opacity-800" id="u" onChange={handleChange}  />
          <input type="email" placeholder="email" className="border rounded-md p-1 border-slate-800 focus:outline-none hover:bg-opacity-80" id="e" onChange={handleChange} />
          <input type="tel" placeholder="phone number" className="border rounded-md p-1 border-slate-800 focus:outline-none hover:bg-opacity-80" id="pn" onChange={handleChange} />
          <input type="password" placeholder="password" className="border rounded-md p-1 border-slate-800 focus:outline-none hover:bg-opacity-80" id="p" onChange={handleChange} />
          <button type="submit" className="text-white font-semibold text-sm  bg-slate-700 p-2 rounded-md border border-gray-300 hover:opacity-60" disabled={load} >{load ? "loading..." : "sign up"}</button>
          <div>{error && <p className="text-sm text-red-500 p-1">{error}</p>}</div>
        </form>
        <div className="text-sm flex mx-auto text-blue-500 gap-8 mb-4">
          <span>Have an account?</span>
          <span className="underline">sign in</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp

//
//