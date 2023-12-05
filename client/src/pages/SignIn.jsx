import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const SignIn = () => {

  const [formData, setFormData] = useState();
  const [error,setError]=useState(null);
  const [loading, setLoading]=useState(false);

  const navg=useNavigate();

  const handleChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    });
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setLoading(true);
    console.log(formData);

   try{
    const res = await fetch('api/auth/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body : JSON.stringify(formData)
    });

    const data = await res.json(); //if there is an error 
    
    if(data.success === false)
    {
      setLoading(false);
;      return setError(data.message);
      
    }
    navg('/');
    return setError(null);
    setLoading(false);
    
   }
   catch(error)
   {
    return setError(error.message);
    setLoading(false);
   }

  }

  return (
    <>
    <div className=" flex justify-center min-h-screen items-center mb-12">
      <div className="bg-white md:w-1/3 w-96 rounded-lg text-black flex flex-col mx-auto gap-4">
        <h1 className="text-xl p-1 font-semibold flex  mx-auto mt-4">Sign in</h1>
        <form className="flex mx-auto flex-col w-64 gap-4" onSubmit= { handleSubmit } >
          <input type="email" placeholder="email" className="border rounded-md p-1 border-slate-800 focus:outline-none hover:bg-opacity-80" onChange={handleChange} id="e" />
          <input type="password" placeholder="password" className="border rounded-md p-1 border-slate-800 focus:outline-none hover:bg-opacity-80" onChange={handleChange} id="p" />
          <button type="submit" className="text-white font-semibold text-sm  bg-slate-700 p-2 rounded-md border border-gray-300 hover:opacity-60" disabled={loading}>{loading ? "loading..." : "Sign in"}</button>
        </form>
        <div className="text-sm flex mx-auto text-red-500 gap-2">
          <span>Don't have an account?</span>
          <span className="underline">sign up</span>
        </div>
        <div className="flex mx-auto mb-4">{error && <p className="text-red-700 text-sm ">{error}</p>}</div>
        
      </div>
    </div>
    </>
  )
}

export default SignIn