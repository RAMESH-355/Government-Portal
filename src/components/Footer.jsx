import { useState } from "react";
import AIChat from "./AIChat";

const Footer = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      <footer
        className="
          fixed
          bottom-0
          left-0
          w-full
          bg-gradient-to-r
          from-orange-300
          to-green-300
          z-40
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            px-3
            sm:px-6
            py-2
          "
        >

          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-black">
            <span className="bg-orange-500 px-2 py-1 rounded-r-full">
              Updates
            </span>
          </div>

          <div
            onClick={() => setOpenChat(true)}
            className="
              flex
              items-center
              gap-1
              cursor-pointer
            "
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/038/130/530/small/icon-for-customer-service-vector.jpg"
              alt="Ask Vidhya"
              className="
                w-8
                h-8
                sm:w-12
                sm:h-12
                rounded-full
                border-2
                border-white
                shadow
              "
            />
            <span
              className="
                bg-yellow-400
                text-gray-800
                text-xs
                sm:text-sm
                px-2
                py-1
                rounded
                font-bold
              "
            >
              ASK Vidhya
            </span>
          </div>
        </div>
      </footer>

      {openChat && <AIChat onClose={() => setOpenChat(false)} />}
    </>
  );
};

export default Footer;
