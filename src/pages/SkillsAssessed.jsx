import { useNavigate } from "react-router-dom";

const SECTORS = [
  { id: 1, name: "Agriculture", icon: "🌾" },
  { id: 2, name: "Apparel", icon: "👕" },
  { id: 3, name: "Automotive", icon: "🚗" },
  { id: 4, name: "Banking & Financial Services", icon: "🏦" },
  { id: 5, name: "Beauty & Wellness", icon: "💄" },
  { id: 6, name: "Capital Goods", icon: "🏭" },

  { id: 7, name: "Construction", icon: "🏗️" },
  { id: 8, name: "Electronics & Hardware", icon: "🔌" },
  { id: 9, name: "Food Processing", icon: "🍱" },
  { id: 10, name: "Gem & Jewellery", icon: "💎" },
  { id: 11, name: "Green Jobs", icon: "🌱" },
  { id: 12, name: "Handicrafts & Carpet", icon: "🧶" },

  { id: 13, name: "Healthcare", icon: "🏥" },
  { id: 14, name: "IT / ITeS", icon: "💻" },
  { id: 15, name: "Life Sciences", icon: "🧬" },
  { id: 16, name: "Logistics", icon: "🚚" },
  { id: 17, name: "Management & Entrepreneurship", icon: "👔" },
  { id: 18, name: "Media & Entertainment", icon: "🎬" },

  { id: 19, name: "Others", icon: "📦" },
  { id: 20, name: "Plumbing", icon: "🔧" },
  { id: 21, name: "Power", icon: "⚡" },
  { id: 22, name: "Telecom", icon: "📡" },
  { id: 23, name: "Tourism & Hospitality", icon: "🏨" },
  { id: 24, name: "Aerospace & Aviation", icon: "✈️" },

  { id: 25, name: "Domestic Workers", icon: "🧹" },
  { id: 26, name: "Furniture & Fittings", icon: "🪑" },
  { id: 27, name: "Government Sector", icon: "🏛️" },
  { id: 28, name: "Hydrocarbon", icon: "🛢️" },
  { id: 29, name: "Instrumentation & Automation", icon: "⚙️" },
  { id: 30, name: "Leather", icon: "👞" },

  { id: 31, name: "Mining", icon: "⛏️" },
  { id: 32, name: "Multi Sectoral", icon: "🧩" },
  { id: 33, name: "Retailers Associations", icon: "🏪" },
  { id: 34, name: "Rubber", icon: "🧤" },
  { id: 35, name: "Sports", icon: "🏀" },
  { id: 36, name: "Textile", icon: "🧵" },
];


const SkillsAssessed = () => {
  const navigate = useNavigate();

  return (
  <div className="bg-white min-h-screen pt-4 sm:pt-6 px-4 sm:px-6">

    <div className="flex items-center gap-3 sm:gap-4 mb-2">
      <span
        onClick={() => navigate("/")}
        className="text-2xl sm:text-3xl font-bold cursor-pointer hover:text-green-600"
      >
        ←
      </span>
      <h1 className="text-lg sm:text-2xl font-bold">
        Skill Assessment for Courses
      </h1>
    </div>

    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
      Assessments
    </p>

    <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
      Select Your Sector
    </h2>

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-4
      sm:gap-6
    ">
      {SECTORS.map((sector) => (
        <div
          key={sector.id}
          onClick={() => navigate(`/skills-assessment/${sector.id}`)}
          className="
            cursor-pointer
            border
            rounded-xl
            px-4
            sm:px-6
            py-4
            sm:py-5
            flex
            items-center
            gap-3
            sm:gap-4
            hover:border-orange-400
            hover:shadow
            transition
          "
        >
          <span className="text-2xl sm:text-3xl">
            {sector.icon}
          </span>

          <span className="text-sm sm:text-lg font-semibold text-gray-800">
            {sector.name}
          </span>
        </div>
      ))}
    </div>

  </div>
);

};

export default SkillsAssessed;
