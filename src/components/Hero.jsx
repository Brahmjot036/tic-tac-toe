import bgImage from "../assets/firstpage.png";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-start h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Shop Now Button */}
      <div className="absolute bottom-10 left-20 ml-52"> 
        <button className="px-12 py-4 text-lg font-semibold tracking-wide text-white bg-transparent border uppercase">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
