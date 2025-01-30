import BG from '../../assets/Bacground.png'
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";



export default function JoinSchoolCafe() {
  const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="flex  bg-gray-100 justify-center">
        {/* Left Section: Image */}
        <div className="w-2/5 hidden lg:block ml-10">
          <img
            src={BG} // Replace with actual image
            alt="Campus Life"
            className="w-full object-cover rounded-lg"
          />
        </div>
  
        {/* Right Section: Form */}
        <div className="w-full  lg:w-1/2 flex items-center justify-center p-8 ">
          <div className="w-full  bg-white p-8 rounded-[24px]">
            <h2 className="text-2xl font-semibold text-gray-800">
            Reset Password
            </h2>
            <p className="text-gray-600 text-sm mb-6">
            Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>
  
            {/* Form Fields */}
            <form className="space-y-5">
  
              <div>
                <label className="text-gray-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  defaultValue="Strongestavenger@example.com"
                />
              </div>
  
              {/* Submit Button */}
              <button className="w-full bg-gradient-to-b from-[#27BAF3] to-[#0C56A5] text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
              Reset Password
              </button>
            </form>
            <p className="text-center text-sm/6 text-gray-500 mt-5">
            <a href="#" className="font-semibold text-[#0076CA] hover:text-indigo-500">
                Return to Log In
            </a>
          </p>
          </div>
        </div>
      </div>
    );
  }
  