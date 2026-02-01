import LoginCard from "./LoginCard";

const loginOptions = [
  {
    title: "Citizen",
    image: "https://img.freepik.com/free-vector/original-circle-formed-with-citizens_23-2147675586.jpg",
    bg: "bg-orange-50",
  },
  {
    title: "Employers",
    image: "https://www.finneganinstitute.com/wp-content/uploads/2018/05/group-of-employees-passionately-working-together.jpg",
    bg: "bg-blue-50",
  },
  {
    title: "Institutions",
    image: "https://classroomclipart.com/image/static7/preview2/educational-institution-icon-over-a-book-67568.jpg",
    bg: "bg-green-50",
  },
  {
    title: "Training Center",
    image: "https://static.vecteezy.com/system/resources/thumbnails/048/629/081/small/screen-laptop-mockups-on-conference-table-with-free-photo.jpg",
    bg: "bg-yellow-50",
  },
  {
    title: "Assessment Center",
    image: "https://thumbs.dreamstime.com/b/job-candicates-assessment-center-21304530.jpg",
    bg: "bg-teal-50",
  },
  {
    title: "Trainer",
    image: "https://i.pinimg.com/736x/d4/95/5e/d4955e04bfa7e361fd069213db40e671.jpg",
    bg: "bg-indigo-50",
  },
  {
    title: "Department",
    image: "https://img.freepik.com/free-vector/office_1284-16995.jpg",
    bg: "bg-red-50",
  },
  {
    title: "Administrator",
    image: "https://cdn-icons-png.flaticon.com/512/9322/9322127.png",
    bg: "bg-gray-50",
  }
];

const LoginModel = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div
        className="
          bg-white
          w-[90%]
          max-w-3xl
          max-h-[80vh]
          rounded-2xl
          p-5
          relative
          overflow-y-auto
        "
      >

        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-black"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold text-center mb-4 border-b-2 border-orange-500 inline-block mx-auto">
          Logins
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {loginOptions.map((item, index) => (
            <LoginCard
              key={index}
              title={item.title}
              image={item.image}
              bgColor={item.bg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginModel;

