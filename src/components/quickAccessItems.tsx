import React from 'react';
import { FiZap, FiLock, FiBook, FiHome, FiUsers, FiShoppingCart, FiMoreHorizontal } from 'react-icons/fi';
import airtime from "../assets/airtime.png";
import cybercafe from "../assets/cybercafe.png";
import question from "../assets/past-question.png";
import calculator from "../assets/calculator.png";
import more from "../assets/more.png";

const quickAccessItems = [
  { id: 1, icon: <img src={airtime} alt="Reports Icon" className="w-16 h-16 object-contain" />, label: 'Airtime/Data' },
  { id: 2, icon:  <img src={cybercafe} alt="Reports Icon" className="w-16 h-16 object-contain" />, label: 'Cybercafe' },
  { id: 3, icon:  <img src={question} alt="Reports Icon" className="w-16 h-16 object-contain" />, label: 'Past Questions' },
  { id: 4, icon:  <img src={cybercafe} alt="Reports Icon" className="w-16 h-16 object-contain" />, label: 'Find Hostel' },
  { id: 5, icon:  <img src={calculator} alt="Reports Icon" className="w-16 h-16 object-contain" />, label: 'CGPA Calculator' },
  { id: 6, icon:  <img src={cybercafe} alt="Reports Icon" className="w-16 h-16 object-contain" />, label: 'Student Loan' },
  { id: 7, icon:  <img src={cybercafe} alt="Reports Icon" className="w-16 h-16 object-contain" />, label: 'Food Stuff' },
  { id: 8, icon:  <img src={more} alt="Reports Icon" className="w-16 h-16 object-contain" />, label: 'More' },
];

export default function QuickAccess() {
  return (
    <div className=" p-6 rounded-xl flex flex-col items-center mt-20">
       <h2 className="text-lg font-semibold mb-4 self-start">Quick Access</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {quickAccessItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md w-36 min-w-[96px] h-36">
            <div className=" text-2xl">{item.icon}</div>
            <p className="text-sm mt-3 text-[#03172A] text-center font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
