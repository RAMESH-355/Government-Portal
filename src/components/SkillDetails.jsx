import { useNavigate, useParams } from "react-router-dom";

const SkillDetails = () => {
  const navigate = useNavigate();
  const { sectorId } = useParams();

  return (
    <div className="min-h-screen bg-white pt-10 px-6">

      <div className="flex items-center gap-3 mb-6">
        <span
          onClick={() => navigate(-1)}
          className="text-3xl font-bold cursor-pointer hover:text-green-600"
        >
          ←
        </span>
        <h1 className="text-2xl font-bold">
          Skill Details
        </h1>
      </div>

      <div className="mt-10 border rounded-lg p-6 bg-white flex flex-row gap-10" >

        <div className="mt-10 p-6">

              <p className="text-lg font-medium">
              You selected Sector ID:
            </p>
            <p className="text-3xl font-bold text-orange-600 mt-2">
              {sectorId}
            </p>

            <p className="mt-6 text-xl font-bold text-black">
              No schedule available for this sector at this time.  <br />
              Later, we will load skills/courses for this sector.
            </p>

        </div>
        
        <img src = "https://upload.wikimedia.org/wikipedia/commons/4/4f/AP_map.jpg" alt="Andhra Pradesh Map" className="rounded-lg shadow-md w-3/6 h-3/6 " /> 


      </div>

    </div>
  );
};

export default SkillDetails;
