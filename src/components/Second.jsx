import React from "react";

const coldCoffees = [
  {
    name: "Iced Latte",
    image: "https://images.unsplash.com/photo-1527156231393-7023794f363c?w=1000&auto=format&fit=crop&q=80",
  },
  {
    name: "Iced Americano",
    image: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?w=1000&auto=format&fit=crop&q=80",
  },
  {
    name: "Frappuccino",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=1000&auto=format&fit=crop&q=80",
  },
  {
    name: "Cold Brew",
    image: "https://images.unsplash.com/photo-1610801180540-8cbacdf6e722?w=1000&auto=format&fit=crop&q=80",
  },
  {
    name: "Mocha Frappe",
    image: "https://images.unsplash.com/photo-1530373239216-42518e6b4063?w=1000&auto=format&fit=crop&q=80",
  },
  {
    name: "Vanilla Shake",
    image: "https://plus.unsplash.com/premium_photo-1695035006916-bb85c139c70c?w=1000&auto=format&fit=crop&q=80",
  },
];

const ColdCoffeeSection = () => {
  return (
    <section className="relative w-full bg-[#F8F1E1] text-[#1D3B30] px-10 py-16 flex flex-col items-center">
      {/* Heading on Top Right */}
      <h2 className="absolute top-10 right-10 text-5xl md:text-7xl font-extrabold tracking-tight">
        OUR COFFEE
      </h2>

      {/* Subtext on Top Left */}
      <p className="absolute top-16 left-10 text-sm md:text-md font-light max-w-sm">
        Cool, refreshing, and packed with flavor. <br /> The perfect coffee for every mood, every moment.
      </p>

      {/* Coffee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-28">
        {coldCoffees.map((coffee, index) => (
          <div key={index} className="relative flex flex-col items-center group">
            {/* Coffee Name on Top Left */}
            <p className="absolute top-4 left-1 text-green-800 text-xs font-semibold uppercase tracking-wide">
              {coffee.name}
            </p>

            {/* Huge Circular Image */}
            <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] bg-white rounded-full overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hover Effect: Oval with Tilted Arrow */}
            <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-[#ffc06e] text-green-950 text-lg px-5 py-2 rounded-full flex items-center gap-2">
                Explore →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColdCoffeeSection;
