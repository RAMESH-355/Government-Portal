import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {

  const [showAadhaar, setShowAadhaar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen px-8 py-6">
      
      <div className="flex items-center gap-4 mt-6">
        <span className="text-3xl font-bold cursor-pointer" onClick = {() => {navigate("/services")}} >←</span>
        <h1 className="text-3xl font-bold text-gray-800">
          Services
        </h1>
      </div>

      <div className="mt-12 flex gap-10">
        
        <div className="w-3/12">
          <img
            src="https://qrologic.com/images/aadhaar-verification.png"
            alt="Aadhaar Verification"
            className="w-full rounded-xl"
          />
        </div>

        <div className="w-6/12 border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Aadhaar Authentication *
          </h2>

          <div className="relative w-1/2">
            <input
              type={showAadhaar ? "text" : "password"}
              placeholder="Enter Aadhaar Number"
              className="w-full px-4 py-2 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowAadhaar(!showAadhaar)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showAadhaar ? "🙈" : "👁️"}
            </button>
          </div>

          <p className="text-sm text-red-500 mt-1">
            This field is required
          </p>

          <div className="flex items-start gap-2 mt-4">
            <input
              type="checkbox"
              id="consent"
              className="mt-1"
            />
            <label htmlFor="consent" className="text-md text-black text-justify">
              I hereby state that I have no objection to authenticating myself through 
              the Aadhaar-based authentication system and consent to providing my 
              Aadhaar number and biometric data/OTP for Aadhaar-based authentication by 
              APTS AUA/KUA for the purpose of authenticating my identity with APSSDC. 
              I understand that the biometrics/OTP provided by me for authentication shall 
              be used solely for verifying my identity through the Aadhaar Authentication 
              System for Training and Employment purposes and for no other purpose. 
              I also understand that APSSDC shall ensure the security and confidentiality 
              of my personal identity data provided for the purpose of Aadhaar-based authentication.
            </label>
          </div>

          <div className="mt-6 flex gap-4 justify-center">
            <button className="px-6 py-2 bg-yellow-400 rounded-md font-semibold hover:bg-yellow-500">
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

export default ServicesPage;
