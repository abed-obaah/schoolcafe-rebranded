import BG from '../assets/Bacground.png'
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useLogin } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";



export default function JoinSchoolCafe() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");


  const { mutate: login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      login(
        { email, password },
        {
          onSuccess: (data) => {
            console.log("Login Successful:", data);


            if (data.token) {
              localStorage.setItem("token", data.token);
            }

            navigate("/dashboard");
          },
        }
      );
    } catch (err) {
      console.error("Login Error:", err);
    }
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   login(
  //     { email, password },
  //     {
  //       onSuccess: (data) => {
  //         console.log("Login Successful:", data);
  //         // Save token in localStorage or state management if needed
  //         localStorage.setItem("token", data.token);
  //         navigate("/dashboard"); // Redirect to dashboard after login
  //       },
  //     }
  //   );
  // };
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
        <div className="w-full  lg:w-1/2 flex items-center justify-center p-8 ">
          <div className="w-full  bg-white p-8 rounded-[24px]">
            <h2 className="text-2xl font-semibold text-gray-800">
             Welcome Back!
            </h2>
            <p className="text-gray-600 text-sm mb-6">
             Your one-stop platform for all campus needs
            </p>
  
            {/* Form Fields */}
            <form className="space-y-5" onSubmit={handleLogin}>
  
              <div>
                <label className="text-gray-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  // defaultValue="Strongestavenger@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
  
              <div className="relative">
                <label className="text-gray-700 block mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-10"
                    placeholder="Create your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                    ) : (
                      <EyeIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                    )}
                  </button>
                </div>
              </div>


              <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-[#0076CA] checked:bg-[#0076CA] indeterminate:border-[#0076CA] indeterminate:bg-[#0076CA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0076CA] disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:checked]:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <label htmlFor="remember-me" className="block text-sm/6 text-gray-900">
                Stay Logged In for 30 days
                </label>
              </div>

              <div className="text-sm/6">
                <a href="/reset-password" className="font-semibold text-[#0076CA] hover:text-indigo-500 underline">
                    Reset Password
                </a>
              </div>
            </div>

            
  
              {/* Submit Button */}
              <button 
  className={`w-full bg-gradient-to-b from-[#27BAF3] to-[#0C56A5] text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition ${isLoading ? "opacity-100" : ""}`} 
  disabled={isLoading} 
  type="submit"
>
  {isLoading ? "Logging in..." : "Log In"}
</button>

{error && <p className="text-red-500">{error.message}</p>}
            </form>
            <p className="text-center text-sm/6 text-gray-500 mt-5">
            Don’t have an account?{' '}
            <a href="#" className="font-semibold text-[#0076CA] hover:text-indigo-500">
             Create an account
            </a>
          </p>
          </div>
        </div>
      </div>
    );
  }
  