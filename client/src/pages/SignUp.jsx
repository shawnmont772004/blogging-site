import React from 'react'
import {useState} from 'react';

const SignUp = () => {
  const [formData,setFormData] = useState({});

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    });
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
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
          <button type="submit" className="text-white font-semibold text-sm  bg-slate-700 p-2 rounded-md border border-gray-300 hover:opacity-60">sign up</button>
        </form>
        <div className="text-sm flex mx-auto text-red-500 gap-4 mb-4">
          <span>Have an account?</span>
          <span className="underline">sign in</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp