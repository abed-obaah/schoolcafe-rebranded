import React from 'react';
import reward from "../../assets/rewards.png";

export default function RewardCard() {
  return (
    <div className="rounded-[24px] bg-white shadow-xl mt-4 py-6 p-4 border-2 border-gray-100">
      <div className="px-4 py-8 sm:p-6 flex justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <img src={reward} alt="Reports Icon" className="w-20 h-20 object-contain mb-4" />

          <p>You haven’t claimed your daily reward yet</p>

          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-b from-[#27BAF3] to-[#0C56A5] text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Claim Rewards
          </button>
        </div>
      </div>
    </div>
  );
}
