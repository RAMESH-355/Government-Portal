const StudentCountCard = () => {
  return (
    <div className="w-60 h-80 [perspective:1000px]">
      <div
        className="
          relative w-full h-full
          transition-transform duration-700
          [transform-style:preserve-3d]
          hover:[transform:rotateY(180deg)]
        "
      >

        <div
          className="
            absolute inset-0
            bg-stone-800
            rounded-xl
            border-2 border-yellow-400
            flex flex-col items-center justify-center
            shadow-lg
            [backface-visibility:hidden]
          "
        >
          <p className="text-white font-bold text-center text-2xl">
            
            Job<br />Placements<br />Done
          </p>

          <p className="mt-4 text-yellow-400 text-4xl font-mono font-bold">
            1,83,213 
          </p>
        </div>


        <div
          className="
            absolute inset-0
            bg-white
            rounded-xl
            border-2 border-orange-500
            flex flex-col items-center justify-center
            shadow-lg
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >
          <p className="text-black text-2xl font-bold text-center">
            Total<br />Candidates<br />Trained
          </p>

          <p className="mt-4 text-orange-500 text-4xl font-mono font-bold">
            2,08,750
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCountCard;
