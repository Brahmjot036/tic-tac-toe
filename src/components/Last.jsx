import coffeeImage from "../assets/coffee2.png"; // Ensure this path is correct

const OrderNowSection = () => {
  return (
    <section className="relative w-full h-screen bg-[#0F3B2F] flex flex-col items-center justify-center text-white">
      {/* Order Now Tape - Left to Right (Tilted Right) */}
      <div className="absolute top-10 left-0 w-full flex overflow-hidden rotate-[10deg] mt-96">
        <div className="flex whitespace-nowrap animate-marquee-left">
          {Array(10)
            .fill("ORDER NOW")
            .map((text, index) => (
              <span
                key={index}
                className="bg-[#F6A800] text-black font-bold px-6 py-2 text-lg mx-1 flex items-center gap-2"
              >
                {text} <span className="text-xl">☕</span>
              </span>
            ))}
        </div>
      </div>

      {/* Order Now Tape - Right to Left (Tilted Left) */}
      <div className="absolute top-20 right-0 w-full flex overflow-hidden rotate-[-10deg] mt-96">
        <div className="flex whitespace-nowrap animate-marquee-right">
          {Array(10)
            .fill("ORDER NOW")
            .map((text, index) => (
              <span
                key={index}
                className="bg-[#F6A800] text-black font-bold px-6 py-2 text-lg mx-1 flex items-center gap-2"
              >
                {text} <span className="text-xl">☕</span>
              </span>
            ))}
        </div>
      </div>

      {/* Main Content */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-center leading-tight mt-6">
        ORDER NOW
      </h1>

      {/* Coffee Image */}
      <div className="mt-1">
        <img
          src={coffeeImage}
          alt="Coffee"
          className="w-[650px] md:w-[450px] rounded-md "
        />
      </div>

      {/* Bottom Navigation Links */}
      <div className="absolute bottom-10 flex gap-6 text-sm md:text-base text-gray-300">
        <a href="#" className="hover:text-white transition">Stories</a>
        <a href="#" className="hover:text-white transition">Coffee</a>
        <a href="#" className="hover:text-white transition">Equipment</a>
        <a href="#" className="hover:text-white transition">Store</a>
      </div>

      {/* Kaff Logo */}
      <div className="absolute bottom-10 left-10 text-gray-300 font-bold text-lg">
        ☕ KAFF
      </div>
    </section>
  );
};

export default OrderNowSection;
