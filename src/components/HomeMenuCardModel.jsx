import { useNavigate } from "react-router-dom";

const HomeCard = ({ image, eng_title, telugu_title, path }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        w-40
        sm:w-44
        lg:w-48
        h-[280px]
        sm:h-[340px]
        lg:h-[460px]
        cursor-pointer
      "
      style={{ perspective: "1000px" }}
      onClick={() => navigate(path)}
    >
      <div
        className="
          relative
          w-full
          h-full
          transition-transform
          duration-700
          [transform-style:preserve-3d]
          md:hover:[transform:rotateY(180deg)]
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-white
            rounded-xl
            shadow-md
            overflow-hidden
            [backface-visibility:hidden]
          "
        >
          <img
            src={image}
            alt={eng_title}
            className="
              h-40
              sm:h-48
              lg:h-96
              w-full
              object-cover
              rounded-br-3xl
            "
          />
          <div className="p-2 sm:p-3 text-center">
            <p className="text-xs sm:text-sm font-bold text-black">
              {eng_title}
            </p>
          </div>
        </div>

        <div
          className="
            absolute
            inset-0
            bg-green-700
            rounded-xl
            shadow-md
            overflow-hidden
            text-white
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            flex
            flex-col
          "
        >
          <img
            src={image}
            alt={telugu_title}
            className="
              h-40
              sm:h-48
              lg:h-96
              w-full
              object-cover
              opacity-90
              rounded-br-3xl
            "
          />
          <div className="p-2 sm:p-3 text-center">
            <p className="text-xs sm:text-sm font-bold">
              {telugu_title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;