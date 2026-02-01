import { useState } from "react";
import LoginModel from "./LoginModel";
import { Naipunyam_logo } from "../Utilities/Image_URL";
import { Link } from "react-router-dom";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b">
      <div className="flex justify-between items-center max-w-10xl mx-2 px-2 sm:px-6 lg:px-8 py-3">

        <div className="flex items-center gap-4">
          <img
            src={Naipunyam_logo }
            alt="Naipunyam Logo"
            className="h-20 w-20 rounded-full"
          />

          <div>
            <h1 className="text-2xl font-bold text-black-900">
              Naipunyam
            </h1>
            <p className="text-sm font-semibold text-black-700">
              Department of Skill Development & Training
            </p>
            <p className="text-sm text-black-600">
              Government of Andhra Pradesh
            </p>
          </div>
        </div>

        <nav className = "items-end">
          <ul className="flex items-center gap-7 text-sm font-medium text-black list-none">
            <li className="cursor-pointer" >
              <Link
              to="/"
              className="font-medium hover:text-green-600"
            >
              Home
            </Link>
          </li>
            <li>
               <button
                  onClick={() => setShowLogin(true)}
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
                >
                  Login
          </button>
            </li>
            <li className="items-end ">
              <>
                <h1> Select language </h1>
                  <select className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm hover:cursor-pointer">
                    <option value="en">🌐 English</option>
                    <option value="te">🌐 తెలుగు</option>
                    <option value="hi">🌐 हिन्दी</option>
                  </select>
              </>
            </li>
          </ul>
        </nav>

      </div>
    </header>
    {showLogin && <LoginModel onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;
