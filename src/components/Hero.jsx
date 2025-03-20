import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowUp } from "react-icons/fa"; // Import arrow icons
import coffee from "../assets/coffee.png";
import coffee1 from "../assets/coffee1.png";
import coffee2 from "../assets/coffee2.png";
import coffee3 from "../assets/coffee3.png";
import tag from "../assets/tag.png"; // Import the tag image

const HeroSection = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScale = 1.4;
      const minScale = 1;
      const zoomFactor = 500;

      let newScale = 1 + scrollY / zoomFactor;
      if (newScale > maxScale) newScale = maxScale;
      if (newScale < minScale) newScale = minScale;

      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-[#1D3B30] text-white px-6 md:px-8 py-12 md:py-16 flex flex-col items-center overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-4 left-6 md:top-6 md:left-8 text-lg md:text-xl font-bold">
        KAFF
      </div>
      <div className="absolute top-4 right-6 md:top-6 md:right-8">
        <button className="bg-white text-black px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-gray-200 transition duration-300">
          Order Now
        </button>
      </div>

      {/* Small Tilted Coffee Quotes */}
      <div className="absolute w-full h-full pointer-events-none">
        <p className="absolute top-[10%] right-[5%] text-white text-[10px] md:text-xs italic font-light rotate-[-10deg] opacity-80">
          ☕ "Espresso & you, the perfect blend."
        </p>
        <p className="absolute top-[5%] left-[12%] text-white text-[10px] md:text-xs italic font-light rotate-[15deg] opacity-70">
          "A latte love in every sip!"
        </p>
        <p className="absolute bottom-[40%] left-[5%] text-white text-[10px] md:text-xs italic font-medium rotate-[-2deg] opacity-80">
          "Coffee dates & warm embraces. ☕🤍"
        </p>
      </div>

      {/* Main Heading */}
      <h1
        className="text-[60px] md:text-[120px] lg:text-[200px] font-extrabold text-center leading-tight"
        style={{
          color: "#F8F1E1",
          fontFamily: "Gaglin, sans-serif",
        }}
      >
        EXPRESSO <br />
        YOURSELF
      </h1>

      {/* Funky Tag */}
      <div className="absolute left-6 md:left-12 top-1/3 flex items-center">
        <span className="bg-yellow-500 px-3 py-1 rounded-full text-black text-xs md:text-sm font-semibold shadow-md">
          ☕ Coffee Fuel
        </span>
        <FaArrowRight className="ml-2 text-yellow-400 text-lg rotate-[30deg]" />
      </div>

      {/* Coffee Image with Zoom on Scroll */}
      <div className="relative mt-8 md:mt-10">
        <img
          src={tag}
          alt="Tag"
          className="absolute left-[-5px] md:left-[-10px] top-[-5px] md:top-[-10px] w-14 md:w-20 lg:w-52"
        />
        <img
          src={coffee}
          alt="Coffee Glass"
          className="w-[220px] md:w-[320px] lg:w-[450px] rounded-lg transition-transform duration-300 ease-out"
          style={{ transform: `scale(${scale})` }}
        />
      </div>

      {/* Scrolling Text (Marquee Effect) */}
      <div className="absolute w-full overflow-hidden bottom-16 md:bottom-28 rotate-6 md:rotate-12 mr-6 md:mr-16">
        <div className="animate-marquee whitespace-nowrap text-yellow-500 font-bold text-lg md:text-2xl bg-yellow-600 py-2">
          <span className="mx-4 md:mx-6">⚡ CAPPUCCINO</span>
          <span className="mx-4 md:mx-6">☕ DOPPIO</span>
          <span className="mx-4 md:mx-6">🔥 MOCHA</span>
          <span className="mx-4 md:mx-6">🥛 LATTE</span>
          <span className="mx-4 md:mx-6">✨ GALA0</span>
        </div>
      </div>

      {/* Funky Callout with Arrow */}
      <FaArrowUp className="absolute bottom-[35%] right-[10%] md:right-[20%] text-yellow-400 text-2xl md:text-3xl animate-bounce" />
      <div className="absolute bottom-[33%] right-[8%] md:right-[16%] text-yellow-400 text-sm md:text-lg font-bold bg-black px-3 md:px-4 py-2 rounded-lg shadow-lg">
        🚀 "Pick your caffeine ride!"
      </div>

      {/* Large Coffee Variants */}
      <div className="absolute bottom-[12%] md:bottom-[20%] right-4 md:right-10 flex space-x-4 md:space-x-8 items-center">
        {[{ img: coffee1, name: "Buzz Brew ☕" }, { img: coffee2, name: "Midnight Mocha 🌙" }, { img: coffee3, name: "Golden Latte ✨" }].map(
          (coffeeItem, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={coffeeItem.img}
                className="w-16 h-16 md:w-28 md:h-28 hover:scale-110 transition duration-300"
                alt={coffeeItem.name}
              />
              <p className="text-yellow-300 font-semibold mt-1 md:mt-2 text-xs md:text-sm">
                {coffeeItem.name}
              </p>
            </div>
          )
        )}
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 w-full bg-[#F5EDE3] text-black py-4 md:py-6 text-center">
        <p className="text-xs md:text-md font-semibold">
          "Sourced from the best beans, blended with love. Come sip the magic!"
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
