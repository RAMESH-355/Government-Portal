import { useNavigate } from "react-router-dom";
import { useState } from "react";

const sectors = [
  { id: 1, name: "Agriculture", icon: "🌾" },
  { id: 2, name: "Apparel", icon: "👕" },
  { id: 3, name: "Automotive", icon: "🚗" },
  { id: 4, name: "Banking, Financial Services", icon: "🏦" },
  { id: 5, name: "Beauty & Wellness", icon: "💄" },
  { id: 6, name: "Capital Goods", icon: "🏗️" },
  { id: 7, name: "Construction", icon: "🏢" },
  { id: 8, name: "Electronics & Hardware", icon: "🔌" },
  { id: 9, name: "Food Processing", icon: "🍎" },
  { id: 10, name: "Healthcare", icon: "🏥" },
  { id: 11, name: "IT-ITeS", icon: "💻" },
  { id: 12, name: "Logistics", icon: "🚚" },  
  { id: 13, name: "Management & Entrepreneurship", icon: "👥", },
  { id: 14, name: "Media & Entertainment", icon: "🎬", },
  { id: 15, name: "Others",icon: "📦", },
  { id: 16, name: "Plumbing", icon: "🔧", },
  { id: 17, name: "Power", icon: "⚡", },
  { id: 18, name: "Telecom", icon: "📡", },
{
  id: 19,
  name: "Tourism & Hospitality",
  icon: "🏨",
},
{
  id: 20,
  name: "Aerospace & Aviation",
  icon: "✈️",
  disabled: true,
},
{
  id: 21,
  name: "Domestic Workers",
  icon: "🏠",
  disabled: true,
},
{
  id: 22,
  name: "Furniture & Fittings",
  icon: "🛋️",
  disabled: true,
},
{
  id: 23,
  name: "Government Sector",
  icon: "🏛️",
  disabled: true,
},
{
  id: 24,
  name: "Hydrocarbon",
  icon: "🧪",
  disabled: true,
},
{
  id: 25,
  name: "Information Technology Sector",
  icon: "💾",
  disabled: true,
},
{
  id: 26,
  name: "Infrastructure Equipment",
  icon: "🌉",
  disabled: true,
},
{
  id: 27,
  name: "Instrumentation & Automation",
  icon: "🤖",
  disabled: true,
},
{
  id: 28,
  name: "Leather",
  icon: "👞",
  disabled: true,
},
{
  id: 29,
  name: "Mining",
  icon: "⛏️",
  disabled: true,
},
{
  id: 30,
  name: "Multi Sectoral",
  icon: "🧩",
  disabled: true,
},
{
  id: 31,
  name: "Retailers Associations",
  icon: "🛒",
  disabled: true,
},
{
  id: 32,
  name: "Rubber",
  icon: "🛞",
  disabled: true,
},
{
  id: 33,
  name: "Sports",
  icon: "🏅",
  disabled: true,
},
{
  id: 34,
  name: "Textile",
  icon: "🧵",
  disabled: true,
}

];

const Registration = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredSectors = sectors.filter((sector) =>
    sector.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className="bg-gray-50 min-h-screen pt-4 sm:pt-6 px-4 sm:px-6">


    <div className="flex items-center gap-3 mb-4 sm:mb-6">
      <span
        onClick={() => navigate("/")}
        className="text-2xl sm:text-3xl font-bold cursor-pointer hover:text-green-600"
      >
        ←
      </span>
      <div>
        <h1 className="text-lg sm:text-2xl font-bold">
          Register for Joining Skill Courses
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Registrations
        </p>
      </div>
    </div>


    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-start sm:items-center mb-6">
      <h2 className="font-semibold text-base sm:text-lg">
        Select Your Sector
      </h2>

      <div className="relative w-full sm:w-64">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {filteredSectors.map((sector) => (
        <div
          key={sector.id}
          onClick={() => navigate(`/registration/${sector.id}`)}
          className="
            bg-white
            border
            rounded-xl
            p-4
            flex
            items-center
            gap-4
            cursor-pointer
            hover:shadow-md
            hover:border-orange-600
            transition
          "
        >
          <span className="text-2xl sm:text-3xl">
            {sector.icon}
          </span>
          <p className="font-medium text-gray-800 text-sm sm:text-base">
            {sector.name}
          </p>
        </div>
      ))}
    </div>

  </div>
);
};

export default Registration;