import BG from '../assets/Bacground.png'




export default function JoinSchoolCafe() {
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
                <label className="text-gray-700 block mb-1">How did you hear about us?</label>
                <select className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Social Media</option>
                  <option>Friends</option>
                  <option>Campus Event</option>
                  <option>Other</option>
                </select>
              </div>
  
              <div>
                <label className="text-gray-700 block mb-1">How did you hear about us?</label>
                <select className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Social Media</option>
                  <option>Friends</option>
                  <option>Campus Event</option>
                  <option>Other</option>
                </select>
              </div>
  
              {/* Submit Button */}
              <button className="w-full  bg-gradient-to-b from-[#27BAF3] to-[#0C56A5] text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  