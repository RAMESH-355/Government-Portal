import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "AI Interview Simulator",
    subtitle: "Interview by Vidya",
    description: "A real-time interview simulation",
    buttonText: "Start Practice",
    image:
      "https://resources.nice.com/wp-content/uploads/2024/02/accurate-forecasting-saves-on-staffing.jpg",
  },
  {
    id: 2,
    title: "Download Certification",
    subtitle: "",
    description:
      "Candidates can download skill & assessment certificates.",
    buttonText: "Download Certificates",
    image:
      "https://www.networkworld.com/wp-content/uploads/2023/11/certificate_certification_by_svetazi_gettyimages-655331082_2400x1600-100788475-orig.jpg?quality=50&strip=all",
  },
  {
    id: 3,
    title: "Skill Trendz",
    subtitle: "",
    description:
      "Displays current and upcoming skill trends. Dynamic and realtime updates.",
    buttonText: "Explore Trends",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 4,
    title: "Events",
    subtitle: "",
    description:
      "Information on skill competitions, hackathons, and major events.",
    buttonText: "See All Events",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 5,
    title: "Feedback & Grievances",
    subtitle: "",
    description: "Provides a real-time interface with direct feedback from users.",
    buttonText: "Submit Feedback",
    image:
      "https://nmba.dosje.gov.in/public/nmba_front/images/feedback.png",
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
  <div className="bg-white min-h-screen pt-4 sm:pt-6 px-4 sm:px-6">

    <div className="flex items-center gap-3 mb-6">
      <span
        className="text-2xl sm:text-3xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        ←
      </span>
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
        Services
      </h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {servicesData.map((service) => (
        <div
          key={service.id}
          className="
            border-2 border-green-600
            rounded-2xl
            overflow-hidden
            shadow-sm
            hover:shadow-lg
            transition
            bg-white
            flex
            flex-col
          "
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-40 sm:h-48 w-full object-cover"
          />

          <div className="p-4 sm:p-5 flex flex-col flex-1">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 text-center">
              {service.title}
            </h2>

            {service.subtitle && (
              <p className="text-xs sm:text-sm text-center text-gray-600 mt-1">
                {service.subtitle}
              </p>
            )}

            <p className="text-sm text-gray-700 text-center mt-3 flex-1">
              {service.description}
            </p>

            <button
              onClick={() => navigate("/servicespage")}
              className="
                mt-5
                bg-green-700
                hover:bg-green-800
                text-white
                font-semibold
                py-2
                rounded-md
              "
            >
              {service.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
export default Services;