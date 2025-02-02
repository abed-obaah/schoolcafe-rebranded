import { Link } from 'react-router-dom';
import BG from '../assets/Bacground.png'
import { useState } from "react";



const options = [
  { value: "Social Media", label: "Social Media Handle" },
  { value: "Friends", label: "Friend’s Username" },
  { value: "Campus Event", label: "Event Name" },
  { value: "Other", label: "Specify Source" },
];

export default function JoinSchoolCafe() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
    return (
      <div className="flex  bg-gray-100 justify-center mt-10">
        {/* Left Section: Image */}
        <div className="w-2/5 hidden lg:block ml-10">
          <img
            src={BG} // Replace with actual image
            alt="Campus Life"
            className="w-full object-cover rounded-lg"
          />
        </div>
  
        {/* Right Section: Form */}
        <div className="w-full  lg:w-1/2 flex items-center justify-center p-8 -mt-5 ">
          <div className="w-full  bg-white p-8 rounded-[24px]">
            <h2 className="text-2xl font-semibold text-gray-800">
            Join SchoolCafe
            </h2>
            <p className="text-gray-600 text-sm mb-6">
             Your one-stop platform for all campus needs
            </p>
  
            {/* Form Fields */}
            <form className="space-y-5">
              <div>
                <label className="text-gray-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
  
              <div>
                <label className="text-gray-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  defaultValue="Strongestavenger@example.com"
                />
              </div>
  
              <div>
                <label className="text-gray-700 block mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-3  py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
  
              <div>
                <label className="text-gray-700 block mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Create your password"
                />
              </div>
  
              <div>
                <label className="text-gray-700 block mb-1">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Confirm your password"
                />
              </div>
  
              <div>
      <label className="text-gray-700 block mb-2 text-sm font-medium ">
        How did you hear about us?
      </label>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => {
              setSelectedOption(option);
              setInputValue(""); // Reset input when a new option is selected
            }}
            className={`w-full px-4 py-3 text-sm font-medium border rounded-lg cursor-pointer transition ${
              selectedOption?.value === option.value
                ? "bg-[#0076CA] text-white border-[#0076CA]" // Active state
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100" // Default state
            }`}
          >
            {option.value}
          </div>
        ))}
      </div>
    </div>
    {selectedOption && (
        <div className="mt-4 mb-4 ">
          <label className="text-gray-700 block mb-1">{selectedOption.label}</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder={`Enter ${selectedOption.label}`}
          />
        </div>
      )}
  
              {/* Submit Button */}
              <Link to={"/verify"}>
              <button className="w-full mt-4  bg-gradient-to-b from-[#27BAF3] to-[#0C56A5] text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
                Sign Up
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
  