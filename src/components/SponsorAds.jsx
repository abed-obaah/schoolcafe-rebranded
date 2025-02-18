import React from "react";
import locate from "../assets/locate.png"
import right from "../assets/right.png"

const SponsoredAds = () => {
  const events = [
    {
      date: "01 JUN",
      title: "Delsu Matriculation",
      location: "Campus 3 big gate, Ivie Road, Abraka, Delta State",
      time: "Wednesday, 08:00am",
    },
    {
      date: "01 JUN",
      title: "Delsu Matriculation",
      location: "Campus 3 big gate, Ivie Road, Abraka, Delta State",
      time: "Wednesday, 08:00am",
    },
    {
      date: "01 JUN",
      title: "Delsu Matriculation",
      location: "Campus 3 big gate, Ivie Road, Abraka, Delta State",
      time: "Wednesday, 08:00am",
    },
    {
      date: "01 JUN",
      title: "Delsu Matriculation",
      location: "Campus 3 big gate, Ivie Road, Abraka, Delta State",
      time: "Wednesday, 08:00am",
    },
  ];

  return (
    <div className="p-6 ">
      {/* Sponsored Ads Section */}
      <section className="mb-8 mt-20">
        <h2 className="text-lg font-semibold mb-3">Sponsored Ads</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-yellow-500 text-white p-4 rounded-lg flex items-center justify-between">
            <div>
              {/* <h3 className="font-bold">Unlock a better tomorrow with Vi</h3>
              <p className="text-sm">Get exclusive solutions to help you get ahead in life</p>
              <button className="mt-2 bg-black text-white px-3 py-1 rounded">Unlock Benefits →</button> */}
            </div>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg flex items-center justify-between">
            <div>
              {/* <h3 className="font-bold">Watch T20 live with Vi</h3>
              <p className="text-sm">No extra cost</p>
              <button className="mt-2 bg-black text-white px-3 py-1 rounded">Get Now →</button> */}
            </div>
          </div>
          <div className="bg-blue-200 text-black p-4 rounded-lg flex items-center justify-between">
            <div>
              {/* <h3 className="font-bold">Recharge and save on hospital bills</h3>
              <p className="text-sm">Get assured hospitalization cover</p>
              <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Recharge Now →</button> */}
            </div>
          </div>
          <div className="bg-red-200 text-black p-4 rounded-lg flex items-center justify-between">
            <div>
              {/* <h3 className="font-bold">Always Running</h3>
              <p className="text-sm">Switch to VI Hero Unlimited</p>
              <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded">Know More →</button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="mt-20">
        <h2 className="text-lg font-semibold mb-3">Upcoming Events</h2>
        <div className="grid grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-2 rounded-lg shadow-md py-4">
              <div className="flex items-center mb-2">
              <div className="bg-blue-100 text-[#0076CA] px-3 py-1 rounded-md text-center border border-[#0076CA]">
                        <p className="text-md font-bold">{event.date.split(" ")[0]}</p> {/* Day */}
                        <p className="text-sm">{event.date.split(" ")[1]}</p> {/* Month */}
                        </div>

                <h3 className="ml-3 font-semibold">{event.title}</h3>
              </div>
              <div className="flex space-x-2">
                <img src={locate} alt="Reports Icon" className="w-6 h-5 object-contain" />
                     <p className="text-sm text-gray-600">{event.location}</p>
              </div>
              
              <div className="flex items-center mt-5 space-x-4">
                        <p className="text-sm text-gray-600">{event.time}</p>
                        <button className="px-3 py-2 text-blue-600 border-2 border-b-4 border-[#0076Cc] border-b-[#0076CA] rounded-lg text-lg font-medium hover:bg-blue-50 transition flex items-center justify-between space-x-4">
                            View details
                            <img src={right} alt="Reports Icon" className=" ml-2 w-3 h-5 object-contain" />
                            </button>
              </div>
             
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SponsoredAds;
