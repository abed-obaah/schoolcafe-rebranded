import { useState } from "react";
import toggleIcon from "../assets/expand.png";  // Import the toggle image
import UnionIcon from "../assets/Union.png";  // Import the toggle image
import MenuIcon from "../assets/rename.png";  // Import the toggle image
import CardIcon from "../assets/card.png";  // Import the toggle image
import ReceiptIcon from "../assets/recipt.png";  // Import the toggle image
import wallet from "../assets/wallet.png";  // Import the toggle image
import lifebuoy from "../assets/lifebuoy.png";  // Import the toggle image
import userIcon from "../assets/user-group.png";  // Import the toggle image
import notiIcon from "../assets/Notification.png";  // Import the toggle image
import notiIcons from "../assets/25.png";  // Import the toggle image
import EYE from "../assets/eye-slash.png";  // Import the toggle image
import Star1 from "../assets/solar_star-bold.svg";  // Import the toggle image
import Star2 from "../assets/solar_star-bold.svg";  // Import the toggle image
import arrow from "../assets/arrow-up-right.png";  // Import the toggle image


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("Dashboard");

  const sections = {
    Dashboard: (
      <div>
          <div className="flex justify-between border-b border-b-blue-100 pb-2">
                <h2 className="text-2xl font-semibold">Dashboard</h2>
                <div className="flex items-center space-x-4">
                <img src={notiIcon} alt="Reports Icon" className="w-9 h-9 object-contain" />
                <img src={notiIcons} alt="Reports Icon" className="w-9 h-9 object-contain" />
            </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg  mt-4 flex justify-between">
          <div className="flex space-x-3">
           <img src={notiIcons} alt="Reports Icon" className="w-12 h-12 object-contain" />
            <div>
            <p className="text-lg">Hello Chizoba!</p>
            <span className="inline-flex items-center rounded-md bg-[#FFD400] px-2 py-1 text-xs font-medium text-[#00172A] ring-1 ring-inset ring-[#FFD400]">
            Rank: Novice
              </span>
            </div>
           
          </div>
         

         <div className="text-right">
                <p className="text-gray-600">Balance<strong></strong></p>
                <div className="flex space-x-8 items-center">
                <img src={EYE} alt="Reports Icon" className="w-5 h-8 object-contain" />
                <p className="text-[30px] font-semibold">₦158,983.70</p>
                </div>
               
         </div>
         
        </div>
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

      </div>
    ),
    Settings: (
      <div>
       <div className="flex justify-between border-b border-b-blue-100 pb-2">
                <h2 className="text-2xl font-semibold">Settings</h2>
                <div className="flex items-center space-x-4">
                <img src={notiIcon} alt="Reports Icon" className="w-9 h-9 object-contain" />
                <img src={notiIcons} alt="Reports Icon" className="w-9 h-9 object-contain" />
            </div>
        </div>
        <p className="text-gray-600">Adjust your preferences here.</p>
      </div>
    ),
    Accounts: (
      <div>
          <div className="flex justify-between border-b border-b-blue-100 pb-2">
                <h2 className="text-2xl font-semibold">Reports</h2>
                <div className="flex items-center space-x-4">
                <img src={notiIcon} alt="Reports Icon" className="w-9 h-9 object-contain" />
                <img src={notiIcons} alt="Reports Icon" className="w-9 h-9 object-contain" />
            </div>
      </div>
        <p className="text-gray-600">View your recent reports.</p>
      </div>
    ),
    Reports: (
      <div>
          <div className="flex justify-between border-b border-b-blue-100 pb-2">
                <h2 className="text-2xl font-semibold">Reports</h2>
                <div className="flex items-center space-x-4">
                <img src={notiIcon} alt="Reports Icon" className="w-9 h-9 object-contain" />
                <img src={notiIcons} alt="Reports Icon" className="w-9 h-9 object-contain" />
            </div>
      </div>
        <p className="text-gray-600">View your recent reports.</p>
      </div>
    ),
  };

  return (
    <div className="flex min-h-screen bg-[#FFFFFF]">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-64" : "w-20 items-center"} bg-[#03172A] text-white transition-all duration-300 flex flex-col rounded-xl`}
      >
        <button className="mb-10 mt-7" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <img src={toggleIcon} alt="Toggle Sidebar" className="w-6 h-6" />
        </button>
        <ul className="space-y-10">
              <li
                className={`mb-4 flex items-center cursor-pointer w-full transition-all duration-300 ${
                  activeSection === "Dashboard" ? "bg-blue-700 px-7 py-2" : ""
                } ${!isSidebarOpen ? "justify-center" : "px-4"}`} 
                onClick={() => setActiveSection("Dashboard")}
              >
                <span className="mr-2 flex items-center">
                  <img src={UnionIcon} alt="Dashboard Icon" className="w-6 h-6 object-contain" />
                </span> 
                {isSidebarOpen && "Dashboard"}
              </li>

              <li
                className={`mb-4 flex items-center cursor-pointer w-full transition-all duration-300 ${
                  activeSection === "Settings" ? "bg-blue-700 px-7 py-2" : ""
                } ${!isSidebarOpen ? "justify-center" : "px-4"}`} 
                onClick={() => setActiveSection("Settings")}
              >
                <span className="mr-2 flex items-center">
                  <img src={ MenuIcon} alt="Settings Icon" className="w-6 h-6 object-contain" />
                </span> 
                {isSidebarOpen && "Daily Task"}
              </li>

              <li
                className={`mb-4 flex items-center cursor-pointer w-full transition-all duration-300 ${
                  activeSection === "Accounts" ? "bg-blue-700 px-7 py-2" : ""
                } ${!isSidebarOpen ? "justify-center" : "px-4"}`} 
                onClick={() => setActiveSection("Accounts")}
              >
                <span className="mr-2 flex items-center">
                  <img src={ReceiptIcon} alt="Reports Icon" className="w-6 h-6 object-contain" />
                </span> 
                {isSidebarOpen && "Manage Your Account"}
              </li>
              <li
                className={`mb-4 flex items-center cursor-pointer w-full transition-all duration-300 ${
                  activeSection === "News" ? "bg-blue-700 px-7 py-2" : ""
                } ${!isSidebarOpen ? "justify-center" : "px-4"}`} 
                onClick={() => setActiveSection("News")}
              >
                <span className="mr-2 flex items-center">
                  <img src={CardIcon} alt="Reports Icon" className="w-6 h-6 object-contain" />
                </span> 
                {isSidebarOpen && "News & Events"}
              </li>
              <li
                className={`mb-4 flex items-center cursor-pointer w-full transition-all duration-300 ${
                  activeSection === "Funds" ? "bg-blue-700 px-7 py-2" : ""
                } ${!isSidebarOpen ? "justify-center" : "px-4"}`} 
                onClick={() => setActiveSection("Funds")}
              >
                <span className="mr-2 flex items-center">
                  <img src={wallet} alt="Reports Icon" className="w-6 h-6 object-contain" />
                </span> 
                {isSidebarOpen && "Manage Funds"}
              </li>
              <li
                className={`mb-4 flex items-center cursor-pointer w-full transition-all duration-300 ${
                  activeSection === "Tools" ? "bg-blue-700 px-7 py-2" : ""
                } ${!isSidebarOpen ? "justify-center" : "px-4"}`} 
                onClick={() => setActiveSection("Tools")}
              >
                <span className="mr-2 flex items-center">
                  <img src={lifebuoy} alt="Reports Icon" className="w-6 h-6 object-contain" />
                </span> 
                {isSidebarOpen && "Free Tools"}
              </li>
              <li
                className={`mb-4 flex items-center cursor-pointer w-full transition-all duration-300 ${
                  activeSection === "Referral" ? "bg-blue-700 px-7 py-2" : ""
                } ${!isSidebarOpen ? "justify-center" : "px-4"}`} 
                onClick={() => setActiveSection("Referral")}
              >
                <span className="mr-2 flex items-center">
                  <img src={userIcon} alt="Reports Icon" className="w-6 h-6 object-contain" />
                </span> 
                {isSidebarOpen && "Referral"}
              </li>
          </ul>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {sections[activeSection]}
      </div>
    </div>
  );
};

export default Dashboard;
