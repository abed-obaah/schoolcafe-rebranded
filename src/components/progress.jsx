import React from 'react'
import Star1 from "../assets/solar_star-bold.svg";  // Import the toggle image
import Star2 from "../assets/solar_star-bold.svg";  // Import the toggle image
import arrow from "../assets/arrow-up-right.png";

export default function progress() {
  return (
      <div className="w-full mt-4 px-4"> {/* Full width with padding */}
      <div className="rounded-[22px] p-4 mb-6  shadow-md  w-full">  
        <div className="flex justify-between p-5">
          <h2 className="text-lg font-semibold mb-0">Your Rank Progress</h2>
          <h2>
            <div className="flex items-center">
                <a href="#" className="text-sm text-[#1D7BC7]">Learn how to grow your rank faster</a>
                <img
                src={arrow}
                alt="Refer Friends"
                className="w-4 h-4 mr-2" />
            </div>
            
          </h2>
        </div>
    
        <div className="flex items-center px-5 mb-2">
          {/* First Star */}
          <img
            src={Star1}
            alt="Refer Friends"
            className="w-4 h-4 mr-2" />
    
          {/* Progress Bar */}
          <div className="relative bg-gray-200 rounded-full h-4 flex-1 w-full">
            <div className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full" style={{ width: '5%' }}></div>
          </div>
    
          {/* Second Star */}
          <img
            src={Star2}
            alt="Refer Friends"
            className="w-4 h-4 ml-2" />
        </div>
    
        <p className="text-sm text-gray-500 px-5">You are 95% away from achieving Amateur</p>
      </div>
          </div>
  )
}
