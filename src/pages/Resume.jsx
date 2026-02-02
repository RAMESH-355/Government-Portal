import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const [showAadhaar, setShowAadhaar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen px-4 sm:px-8 py-4 sm:py-6">

      <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <span
          className="text-2xl sm:text-3xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          ←
        </span>
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800">
          Resume Builder
        </h1>
      </div>

      <div className="mt-8 sm:mt-12 flex flex-col lg:flex-row gap-6 lg:gap-10">

        <div className="w-full lg:w-3/12 flex justify-center">
          <img
            src="https://qrologic.com/images/aadhaar-verification.png"
            alt="Aadhaar Verification"
            className="w-48 sm:w-full rounded-xl"
          />
        </div>

        <div className="w-full lg:w-6/12 border rounded-xl p-5 sm:p-8 shadow-sm">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Aadhaar Authentication *
          </h2>

          <div className="relative w-full sm:w-2/3">
            <input
              type={showAadhaar ? "text" : "password"}
              placeholder="Enter Aadhaar Number"
              className="w-full px-4 py-2 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowAadhaar(!showAadhaar)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showAadhaar ? "🙈" : "👁️"}
            </button>
          </div>

          <p className="text-xs sm:text-sm text-red-500 mt-1">
            This field is required
          </p>

          <div className="flex items-start gap-2 mt-4">
            <input type="checkbox" id="consent" className="mt-1" />
            <label
              htmlFor="consent"
              className="text-sm sm:text-md text-black text-justify"
            >
              I hereby state that I have no objection to authenticating myself
              through the Aadhaar-based authentication system and consent to
              providing my Aadhaar number and biometric data/OTP for Aadhaar-based
              authentication by APTS AUA/KUA for the purpose of authenticating my
              identity with APSSDC. I understand that the biometrics/OTP provided
              by me shall be used solely for Training and Employment purposes.
            </label>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-6 py-2 bg-yellow-400 rounded-md font-semibold hover:bg-yellow-500"
              onClick={() =>
                alert("OTP sent successfully to your registered mobile number")
              }
            >
              Send OTP
            </button>

            <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50">
              🔊 Play Audio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
