import { useState } from "react";
import AIChat from "./AIChat";

const Footer = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <>

      <footer className="fixed bottom-0 left-0 w-full h-14 bg-gradient-to-r from-orange-300 to-green-300 flex items-center justify-between px-6 z-40">
        
        <div className="flex items-center gap-2 font-semibold text-black">
          <span className="bg-orange-500 text-black px-3 py-1 rounded-r-full">
            Updates:
          </span>
        </div>

        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => setOpenChat(true)}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/038/130/530/small/icon-for-customer-service-vector.jpg"
            alt="Ask Vidhya"
            className="w-16 h-16 rounded-full border-2 border-white shadow"
          />
          <span className="bg-yellow-400 text-gray-800 text-md px-2 py-1 rounded font-bold">
            ASK Vidhya
          </span>
        </div>
      </footer>

      {openChat && <AIChat onClose={() => setOpenChat(false)} />}
    </>
  );
};

export default Footer;
