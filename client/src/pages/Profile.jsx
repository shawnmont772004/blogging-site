import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const { currentUser } = useSelector((state) => state.userss);
  return (
    <>
      <div className="flex justify-center min-h-screen items-center mb-12">
        <div className="p-3 bg-white md:w-1/3 w-96 rounded-lg text-black flex flex-col justify-center items-center gap-4">
          <h1 className="text-lg font-semibold text-black mt-2 border-b border-black">Profile</h1>
          <div>
            <img
              src={currentUser.ProfilePic}
              alt="profile"
              className="rounded-full w-24 h-24"
            />
          </div>
          <form className="text-black flex flex-col gap-4">
            <input
              type="text"
              defaultValue={currentUser.UserName} 
              className="text-md w-64 p-1 rounded-md focus:bg-slate-200 hover:bg-blue-300"
            />
            <input
              type="text"
              defaultValue={currentUser.EMail}
              className="text-md w-64 p-1 rounded-md focus:bg-slate-200 hover:bg-blue-300"
            />
            <input
              type="text"
              placeholder="password"
              className="text-md w-64 p-1 rounded-md focus:bg-slate-200 hover:bg-blue-300"
            />
          </form>
          <button className="bg-slate-800 text-white rounded-md hover:bg-blue-300 p-2 w-64">
              Update
            </button>
          <div className="flex gap-8">
            <span className="text-sm text-red-500 underline">Delete account?</span>
            <span className="text-sm text-red-500">Sign out?</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
