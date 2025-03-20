import roastImage from "../assets/coffee2.png"; // Ensure the correct image path

const RoastingSection = () => {
  return (
    <section className="w-full bg-[#1d3b30] text-white py-16 px-10 flex flex-col items-center">
      {/* Heading and Description */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start max-w-5xl mb-8">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide">
          OUR ROASTING
        </h2>
        <p className="text-sm md:text-md max-w-sm text-gray-300 mt-4 md:mt-0">
          A cup of coffee on a warm summer day reminds you there's a bright side to every day.
          There’s a great big coffee world waiting for you. And it tastes great!
        </p>
      </div>

      {/* Roast Options */}
      <div className="flex flex-col gap-6 w-full max-w-5xl">
        {["LIGHT ROAST", "MEDIUM ROAST", "MEDIUM-DARK ROAST", "DARK ROAST"].map((roast, index) => (
          <div
            key={index}
            className={`relative flex justify-between items-center px-6 py-8 rounded-full shadow-lg transition-all duration-300 group ${
              roast === "MEDIUM-DARK ROAST" ? "bg-[#F6A800] text-black font-bold" : "bg-[#072C22]"
            }`}
          >
            <span className="text-2xl md:text-3xl font-semibold">{roast}</span>

            {/* Arrow Button */}
            <div className="w-12 h-12 bg-[#F6A800] flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
              <span className="text-3xl">↗</span>
            </div>

            {/* Highlighted Roast Image */}
            {roast === "MEDIUM-DARK ROAST" && (
              <img
                src={roastImage}
                alt="Roast Coffee"
                className="absolute right-16 -bottom-6 w-28 h-28 rounded-full object-cover shadow-md transition-transform duration-300 group-hover:scale-110"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoastingSection;
