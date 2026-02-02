import { useNavigate } from "react-router-dom";
import { useState } from "react";

const jobSummary = [
  { id: 1, title: "Industries", count: "8,291", bg: "bg-emerald-50" },
  { id: 2, title: "Aggregators", count: 0, bg: "bg-orange-50" },
  { id: 3, title: "Job Melas", count: "6,270", bg: "bg-pink-50" },
  { id: 4, title: "AI Scrapping", count: "58,449", bg: "bg-sky-50" },
  { id: 5, title: "OMCAP", count: 0, bg: "bg-green-50" },
];

const jobSectors = [
  { id: "aerospace-aviation", name: "Aerospace & Aviation", count: 0, icon: "✈️" },
  { id: "agriculture", name: "Agriculture", count: 1107, icon: "🌾" },
  { id: "apparel", name: "Apparel", count: 370, icon: "👕" },
  { id: "automotive", name: "Automotive", count: 3614, icon: "🚗" },
  { id: "banking-financial-services", name: "Banking, Financial Services", count: 3976, icon: "🏦" },
  { id: "beauty-wellness", name: "Beauty & Wellness", count: 0, icon: "💄" },

  { id: "capital-goods", name: "Capital Goods", count: 308, icon: "🏭" },
  { id: "construction", name: "Construction", count: 3230, icon: "🏗️" },
  { id: "domestic-workers", name: "Domestic Workers", count: 10, icon: "👨‍👩‍👧" },
  { id: "electronics-hardware", name: "Electronics & Hardware", count: 32, icon: "📟" },
  { id: "food-processing", name: "Food Processing", count: 810, icon: "🍱" },
  { id: "furniture-fittings", name: "Furniture & Fittings", count: 130, icon: "🪑" },

  { id: "gem-jewellery", name: "Gem & Jewellery", count: 70, icon: "💎" },
  { id: "government-sector", name: "Government Sector", count: 0, icon: "🏛️" },
  { id: "green-jobs", name: "Green Jobs", count: 152, icon: "🌱" },
  { id: "handicrafts-carpet", name: "Handicrafts and Carpet", count: 4, icon: "🧶" },
  { id: "healthcare", name: "Healthcare", count: 4034, icon: "🏥" },
  { id: "hydrocarbon", name: "Hydrocarbon", count: 799, icon: "🧪" },

  { id: "it-ites", name: "IT-ITeS", count: 1731, icon: "💻" },
  { id: "information-technology", name: "Information Technology Sector", count: 31, icon: "🖥️" },
  { id: "infrastructure-equipment", name: "Infrastructure Equipment", count: 15, icon: "🌉" },
  { id: "instrumentation-automation", name: "Instrumentation, Automation", count: 7, icon: "⚙️" },
  { id: "leather", name: "Leather", count: 0, icon: "👞" },
  { id: "life-sciences", name: "Life Sciences", count: 897, icon: "🧬" },

  { id: "logistics", name: "Logistics", count: 65, icon: "🚚" },
  { id: "management-entrepreneurship", name: "Management & Entrepreneurship", count: 1200, icon: "👥" },
  { id: "media-entertainment", name: "Media & Entertainment", count: 1484, icon: "🎬" },
  { id: "mining", name: "Mining", count: 322, icon: "⛏️" },
  { id: "multi-sectoral", name: "Multi Sectoral", count: 0, icon: "🧩" },
  { id: "others", name: "Others", count: 0, icon: "📦" },

  { id: "plumbing", name: "Plumbing", count: 0, icon: "🚰" },
  { id: "power", name: "Power", count: 308, icon: "⚡" },
  { id: "retailers-association", name: "Retailers Association's", count: 0, icon: "🏪" },
  { id: "rubber", name: "Rubber", count: 0, icon: "🧴" },
  { id: "sports", name: "Sports", count: 0, icon: "🏀" },
  { id: "telecom", name: "Telecom", count: 401, icon: "📡" },

  { id: "textile", name: "Textile", count: 0, icon: "🧵" },
  { id: "tourism-hospitality", name: "Tourism & Hospitality", count: 503, icon: "🧳" },
];

const JobOpportunities = () => {
  const navigate = useNavigate(); 

  const [search, setSearch] = useState("");
  
  const normalizedSearch = search.trim().toLowerCase();

    const filteredJobSectors = jobSectors.filter((sector) =>
      sector.name
        .toLowerCase()
        .split(/[\s,&-]+/)
        .some(word => word.startsWith(normalizedSearch))
    );


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
        <h1 className="font-bold text-lg sm:text-2xl text-gray-800">
          Job Opportunities ( Total Jobs: 73010 )
        </h1>
      </div>
      <p className="text-gray-800 text-sm sm:text-xl font-medium mt-1">
        Opportunities
      </p>
    </div>

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-5
      gap-4
      mb-6
    ">
      {jobSummary.map((job) => (
        <div
          key={job.id}
          className={`
            rounded-lg
            p-4
            ${job.bg}
            hover:shadow-lg
            transition
          `}
        >
          <h2 className="text-base sm:text-xl font-bold text-black">
            {job.title}
          </h2>

          <p className="text-sm sm:text-md text-gray-800 mt-3">
            Number of Positions
          </p>

          <p className="text-xl sm:text-2xl font-bold text-gray-800">
            {job.count}
          </p>
        </div>
      ))}
    </div>

    <div className="
      flex
      flex-col
      sm:flex-row
      gap-3
      sm:gap-10
      items-start
      sm:items-center
      mb-6
    ">
      <h2 className="font-semibold text-base sm:text-lg text-gray-700">
        Select Your Sector
      </h2>

      <div className="relative w-full sm:w-72">
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

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-5
      gap-4
      sm:gap-6
    ">
      {filteredJobSectors.map((sector) => (
        <div
          key={sector.id}
          onClick={() => navigate(`/job-opportunities-details/${sector.id}`)}
          className="
            bg-white
            border
            rounded-xl
            p-4
            sm:p-5
            flex
            items-center
            gap-3
            sm:gap-4
            cursor-pointer
            hover:shadow-md
            hover:border-orange-600
            transition
          "
        >
          <span className="text-3xl sm:text-5xl">
            {sector.icon}
          </span>

          <div className="flex flex-col">
            <p className="text-lg sm:text-xl font-bold text-gray-800">
              {sector.count}
            </p>
            <p className="text-sm sm:text-base font-bold text-black">
              {sector.name}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
);

};

export default JobOpportunities;