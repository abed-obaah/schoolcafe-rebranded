import { useState } from "react";
import email from '../../assets/Subtract.png';
import object from '../../assets/logos_whatsapp-icon.png';
import checks from '../../assets/Objects.png';

const VerificationSteps = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [whatsappotp, setWhatsappOtp] = useState(["", "", "", "", "", ""]);

  const isEmailOtpComplete = otp.join("").length === 6;
  const isWhatsappOtpComplete = whatsappotp.join("").length === 6;

  const handleChange = (index, value, otpType) => {
    if (/^\d?$/.test(value)) {
      if (otpType === "email") {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < otp.length - 1) {
          document.getElementById(`otp-${index + 1}`).focus();
        }
      } else {
        const newWhatsappOtp = [...whatsappotp];
        newWhatsappOtp[index] = value;
        setWhatsappOtp(newWhatsappOtp);
        if (value && index < whatsappotp.length - 1) {
          document.getElementById(`whatsappotp-${index + 1}`).focus();
        }
      }
    }
  };

  const handleVerifyEmail = () => {
    if (isEmailOtpComplete) setStep(2);
  };

  const handleVerifyWhatsApp = () => {
    if (isWhatsappOtpComplete) setStep(3);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl w-full  max-w-2xl text-center mt-[10%]">
        {/* Progress Bar */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full ${step >= 1 ? "bg-[#0076CA]" : "bg-gray-300"}`}></div>
            <p className="mt-2 text-sm">{step >= 1 ? "Email" : "Start"}</p>
          </div>
          <div className={`w-full h-1 -mt-5 ${step >= 2 ? "bg-[#0076CA]" : "bg-gray-300"}`} />
          <div className="flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full ${step >= 2 ? "bg-[#0076CA]" : "bg-gray-300"}`}></div>
            <p className="mt-2 text-sm">{step >= 2 ? "WhatsApp" : "WhatsApp"}</p>
          </div>
          <div className={`w-full h-1 -mt-5 ${step >= 3 ? "bg-[#0076CA]" : "bg-gray-300"}`} />
          <div className="flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full ${step >= 3 ? "bg-[#0076CA]" : "bg-gray-300"}`}></div>
            <p className="mt-2 text-sm">{step >= 3 ? "Complete" : "Complete"}</p>
          </div>
        </div>

        {/* Step 1 - Email Verification */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold mt-6 text-left">Verify your Email Address</h2>
            <p className="text-gray-600 mt-2 text-left">
              We've sent a verification code to St***er@example.com
            </p>

            <h2 className="text-[12px] font-[500] mt-6 text-left">Enter Verification Code</h2>
            <div className="flex justify-center mt-4 space-x-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value, "email")}
                />
              ))}
            </div>

            <button
              onClick={handleVerifyEmail}
              disabled={!isEmailOtpComplete}
              className={`mt-6 w-full py-3 px-[180px] rounded-lg text-lg text-white ${
                isEmailOtpComplete ? "bg-gradient-to-b from-[#27BAF3] to-[#0C56A5]" : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Verify
            </button>

            <p className="mt-4 text-gray-600">
              Didn't receive the code? <a href="#" className="text-blue-500">Resend Code</a>
            </p>
          </>
        )}

        {/* Step 2 - WhatsApp Verification */}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold mt-6 text-left">Verify your WhatsApp</h2>
            <p className="text-gray-600 mt-2 text-left">
              You’ll receive a message from SchoolCafe on WhatsApp. Reply with “Hi” to verify your number.
            </p>

            <h2 className="text-[12px] font-[500] mt-6 text-left">Enter Verification Code</h2>
            <div className="flex justify-center mt-4 space-x-4">
              {whatsappotp.map((digit, index) => (
                <input
                  key={index}
                  id={`whatsappotp-${index}`}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value, "whatsapp")}
                />
              ))}
            </div>

            <button
              onClick={handleVerifyWhatsApp}
              disabled={!isWhatsappOtpComplete}
              className={`mt-6 w-full py-3 px-[180px] rounded-lg text-lg text-white ${
                isWhatsappOtpComplete ? "bg-gradient-to-b from-[#27BAF3] to-[#0C56A5]" : "bg-gray-300 cursor-not-allowed"
              }`}
            >
             Verify
            </button>
            <p className="mt-4 ">
              <a href="#" className="text-blue-500">Open WhatsApp</a>
            </p>
          </>
        )}

        {/* Step 3 - Completion */}
        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold mt-6 text-left">Verification Complete!</h2>
            <p className="text-gray-600 mt-2 text-left">Your account is now fully verified</p>
            <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between bg-gray-200 p-4 rounded-xl">
            <div className="flex items-center space-x-3">
              <img src={email} className=" h-5"/>
              <span className="text-lg font-normal">Email Address</span>
            </div>
            <img src={checks} className=" h-6"/>
          </div>

          <div className="flex items-center justify-between bg-gray-200 p-4 rounded-xl">
            <div className="flex items-center space-x-3">
            <img src={object} className=" h-6"/>
              <span className="text-lg font-normal">WhatsApp Number</span>
            </div>
            <img src={checks} className=" h-6"/>
          </div>
        </div>
        <button className="mt-6 w-full bg-gradient-to-b from-[#27BAF3] to-[#0C56A5] text-white font-semibold py-3 rounded-lg text-lg  hover:opacity-90 transition">
          Complete your profile
        </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerificationSteps;
