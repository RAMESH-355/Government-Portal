import { useNavigate } from "react-router-dom";

const LoginCard = ({ image, title, bgColor, onClick }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl shadow-sm overflow-hidden ${bgColor} hover:shadow-md transition`}
    >
      <img src={image} alt={title} className="h-32 w-full object-cover" />

      <div className="p-3 text-center">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <div className="flex justify-center">
          <div
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/login/${title.toLowerCase().replace(/\s+/g, "")}`);
            }}
            className="w-9 h-9 rounded-full border border-green-600 text-green-600 font-bold text-2xl
                       flex items-center justify-center hover:bg-green-600 hover:text-white transition"
          >
            →
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
