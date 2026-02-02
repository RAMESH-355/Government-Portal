
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployerZone = () => {
  const navigate = useNavigate();

  const [idType, setIdType] = useState("PAN");
  const [idValue, setIdValue] = useState("");

  const handleVerify = () => {
    const regex = /^[A-Za-z0-9]{10}$/;

    if (!regex.test(idValue)) {
      alert("Please enter a valid 10-character PAN/TAN/TIN");
      return;
    }

    alert("Your verification is done. Thank you for registration.");
  };

  return (
  <div className="bg-white min-h-screen pt-4 sm:pt-6 px-4 sm:px-6">

    <div className="flex flex-col mb-4 sm:mb-6">
      <div className="flex items-center gap-3">
        <span
          className="text-2xl sm:text-3xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          ←
        </span>
        <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
          Employer Onboarding
        </h1>
      </div>
      <p className="text-gray-600 text-sm sm:text-base mt-1">
        Employer
      </p>
    </div>

    <div className="
      flex
      flex-col
      lg:flex-row
      items-center
      gap-8
      lg:gap-20
      mt-8
      lg:mt-20
    ">

      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/onboarding-3d-icon-png-download-12031470.png"
        alt="Employer Zone"
        className="
          w-40 h-40
          sm:w-52 sm:h-52
          lg:w-60 lg:h-60
        "
      />

      <div className="
        bg-white
        border
        rounded-xl
        p-5
        sm:p-8
        w-full
        max-w-xl
        shadow-sm
      ">

        <h2 className="text-lg sm:text-xl font-semibold text-red-600 mb-6">
          Enter PAN / TAN / TIN
        </h2>

        <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
          {["PAN", "TAN", "TIN"].map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="idType"
                value={type}
                checked={idType === type}
                onChange={() => setIdType(type)}
              />
              <span className="font-medium">{type}</span>
            </label>
          ))}
        </div>

        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Enter {idType} *
          </label>

          <input
            type="text"
            value={idValue}
            onChange={(e) => setIdValue(e.target.value.toUpperCase())}
            maxLength={10}
            placeholder={`Enter ${idType}`}
            className="
              w-full
              border
              rounded-md
              px-4
              py-2
              focus:outline-none
              focus:ring-2
              focus:ring-orange-400
            "
          />
        </div>

        {/* Button */}
        <button
          onClick={handleVerify}
          className="
            w-full
            sm:w-auto
            bg-orange-400
            hover:bg-orange-500
            text-black
            font-semibold
            px-8
            py-2
            rounded-md
          "
        >
          Verify
        </button>
      </div>

    </div>

  </div>
);

};

export default EmployerZone;