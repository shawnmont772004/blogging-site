import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Nav = () => {
    const { currentUser } = useSelector((state) => state.userss)
    //if you have any pother const name besides currentUser like existtUser or newUser it wouldnt show you the profile pic
  return (
   <>
    <div className="max-w-screen-2xl mx-auto">
        <div className="p-5 flex justify-around bg-slate-800 items-center">
            <span className="text-2xl font-bold">Mo-Blog</span>
            <ul className="flex md:gap-24 gap-8 text-lg ">
                <Link to="/"><li className="hover:bg-white hover:text-slate-900 p-2 border rounded-md">Home</li></Link>
                <Link to="/about"><li className="hover:bg-white hover:text-slate-900 p-2 border rounded-md hidden md:block">About</li></Link>
                {currentUser ? (<Link to="profile"><img src={currentUser.ProfilePic} alt="profile" className="rounded-full w-16 h-16"/></Link>) : (<Link to="/sign-in"><li className="hover:bg-white hover:text-slate-900 p-2 border rounded-md">Sign-in</li></Link>   )} 
            </ul>
        </div>
    </div>
   </>
  )
}

export default Nav