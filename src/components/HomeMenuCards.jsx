import HomeCard from "./HomeMenuCardModel";
import StatCard from "./StudentsCountCard";

const cards = [
  {
    eng_title: "Build your Resume",
    telugu_title: "మీ బయో డేటాని రూపొందించుకోండి",
    image: "https://career.missouri.edu/wp-content/uploads/2024/07/resume-closeup105088013.jpg",
  },
  {
    eng_title: "Register for joining skill courses",
    telugu_title: "నైపుణ్య కోర్సులకు చేరడానికి నమోదు చేసుకోండి",
    image: "https://www.imageconsultinginstitute.com/ckfinder/userfiles/images/2279-750x536.webp",
  },
  {
    eng_title: "Are you skilled? Get your skills assessed",
    telugu_title: "మీరు నైపుణ్యం కలిగివున్నారా? మీ నైపుణ్యాలను అంచనా వేయించుకోండి",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
  },
  {
    eng_title: "Job Opportunities",
    telugu_title: "ఉద్యోగ అవకాశాలు",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f",
  },
  {
    eng_title: "Employer Zone",
    telugu_title: "నియమకధారుల విభాగం",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    eng_title: "Services",
    telugu_title: "సేవలు",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];


const Home = () => {
  return (
    <section className="flex flex-wrap gap-3 justify-center items-center bg-full py-16 bg-gradient-to-b from-white to-lime-300 ">
      
      <HomeCard {...cards[0]} path="/resume" />
      <HomeCard {...cards[1]} path="/registration" />
      <HomeCard {...cards[2]} path="/skills" />

      <StatCard />

      <HomeCard {...cards[3]} path="/jobopportunities" />
      <HomeCard {...cards[4]} path="/employerzone" />
      <HomeCard {...cards[5]} path="/services" />

    </section>
  );
};

export default Home;
