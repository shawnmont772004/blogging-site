import React from 'react'

const SignIn = () => {
  return (
    <>
    <div className=" flex justify-center min-h-screen items-center mb-12">
      <div className="bg-white md:w-1/3 w-96 rounded-lg text-black flex flex-col mx-auto gap-4">
        <h1 className="text-xl p-1 font-semibold flex  mx-auto mt-4">Sign in</h1>
        <form className="flex mx-auto flex-col w-64 gap-4">
          <input type="email" placeholder="email" className="border rounded-md p-1 border-slate-800 focus:outline-none hover:bg-opacity-80"/>
          <input type="password" placeholder="password" className="border rounded-md p-1 border-slate-800 focus:outline-none hover:bg-opacity-80"/>
          <button type="submit" className="text-white font-semibold text-sm  bg-slate-700 p-2 rounded-md border border-gray-300 hover:opacity-60">sign in</button>
        </form>
        <div className="text-sm flex mx-auto text-red-500 gap-4 mb-4">
          <span>Don't have an account?</span>
          <span className="underline">sign up</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignIn