import React from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline, MdOutlineMail } from "react-icons/md";
import { Link } from "react-router";
import { sin } from "../assets";

const Forgot = () => {
  return (
    <div className="flex h-[700px] w-full ">
      <div className="w-full hidden md:inline-block">
        <img
          className="h-full ml-4 rounded-lg"
          src={sin}
          alt="leftSideImage"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <form className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-900 font-medium mb-6">Forget Password?</h2>




          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <MdOutlineMail />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            Send Email
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Don’t have an account?
            <Link
              to="/sign"
              className="text-indigo-400 hover:underline ml-1"
            >
              Signup Now
            </Link>
          </p>
        </form>
      </div>
    </div>

  )
}

export default Forgot
