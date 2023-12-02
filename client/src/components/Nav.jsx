import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
   <>
    <div className="max-w-screen-2xl mx-auto">
        <div className="p-5 flex justify-around bg-slate-800 items-center">
            <span className="text-2xl font-bold">Mo-Blog</span>
            <ul className="flex md:gap-24 gap-8 text-lg ">
                <Link to="/"><li className="hover:bg-white hover:text-slate-900 p-2 border rounded-md">Home</li></Link>
                <Link to="/about"><li className="hover:bg-white hover:text-slate-900 p-2 border rounded-md hidden md:block">About</li></Link>
                <Link to="/sign-up"><li className="hover:bg-white hover:text-slate-900 p-2 border rounded-md">Sign-up</li></Link>    
            </ul>
        </div>
    </div>
   </>
  )
}

export default Nav