import { useState } from "react";
import LoginModel from "./LoginModel";
import { Naipunyam_logo } from "../Utilities/Image_URL";
import { Link } from "react-router-dom";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b">
        <div className="flex items-center justify-between px-3 sm:px-6 py-2">

          <div className="flex items-center gap-2 sm:gap-4">
            <img
              src={Naipunyam_logo}
              alt="Naipunyam Logo"
              className="h-10 w-10 sm:h-16 sm:w-16 rounded-full"
            />

            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-black">
                Naipunyam
              </h1>
              <p className="text-xs font-semibold">
                Department of Skill Development & Training
              </p>
              <p className="text-xs">
                Government of Andhra Pradesh
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>

            <button
              onClick={() => setShowLogin(true)}
              className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
            >
              Login
            </button>

            <select className="border rounded-md px-2 py-1 text-sm cursor-pointer">
              <option value="en">🌐 English</option>
              <option value="te">🌐 తెలుగు</option>
              <option value="hi">🌐 हिन्दी</option>
            </select>
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            ☰
          </button>
        </div>

        {openMenu && (
          <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
            <Link
              to="/"
              onClick={() => setOpenMenu(false)}
              className="block text-sm font-medium"
            >
              Home
            </Link>

            <button
              onClick={() => {
                setShowLogin(true);
                setOpenMenu(false);
              }}
              className="w-full bg-green-600 text-white py-2 rounded-md"
            >
              Login
            </button>

            <select className="w-full border rounded-md px-2 py-2 text-sm">
              <option value="en">🌐 English</option>
              <option value="te">🌐 తెలుగు</option>
              <option value="hi">🌐 हिन्दी</option>
            </select>
          </div>
        )}
      </header>

      {showLogin && <LoginModel onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;
