import { useNavigate, useParams } from "react-router-dom";

const JobOpportunitiesDetails = () => {
  const { sectorId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-6 sm:pt-10 px-4 sm:px-6">

      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span
          onClick={() => navigate(-1)}
          className="text-2xl sm:text-3xl font-bold cursor-pointer"
        >
          ←
        </span>
        <h1 className="text-lg sm:text-2xl font-bold">
          Job Opportunities Details
        </h1>
      </div>

      <div className="
        mt-6
        sm:mt-10
        border
        rounded-lg
        p-4
        sm:p-6
        bg-white
        flex
        flex-col
        lg:flex-row
        gap-6
        lg:gap-10
        items-center
      ">

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-base sm:text-lg font-medium">
            You selected Sector ID:
          </p>

          <p className="text-2xl sm:text-3xl font-bold text-orange-600 mt-2">
            {sectorId}
          </p>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl font-bold text-black">
            No schedule available for this sector at this time.
            <br />
            Later, we will load skills/courses for this sector.
          </p>
        </div>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/AP_map.jpg"
          alt="Andhra Pradesh Map"
          className="
            w-full
            sm:w-2/3
            lg:w-1/2
            rounded-lg
            shadow-md
          "
        />
      </div>

    </div>
  );
};

export default JobOpportunitiesDetails;
