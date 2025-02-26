
const products = [
  {
    name: 'Diamond Elegance Necklace',
    price: '$999',
    image: 'https://plus.unsplash.com/premium_photo-1740020241476-be2394113f0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fERpYW1vbmQlMjBFbGVnYW5jZSUyME5lY2tsYWNlfGVufDB8fDB8fHww',
  },
  {
    name: 'Golden Royal Bracelet',
    price: '$799',
    image: 'https://plus.unsplash.com/premium_photo-1739449967839-cab9f812108f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sapphire Luxe Ring',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1488846156747-f17f59c58e70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ShopBestsellers = () => {
  return (
    <div id="shop" className="bg-[#000000] text-white py-32">
      <div className="container mx-auto px-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 
            className="text-7xl font-bold text-[#ffffff] drop-shadow-[0_0_15px_rgba(163,149,133,0.5)]" 
            style={{ fontFamily: "Brittany" }}
          >
            Shop Our Bestsellers 
          </h2>
          <p className="text-xl mt-4 opacity-80 text-gray-300 italic">
            A touch of elegance, a symbol of prestige.
          </p>
        </div>

        {/* Products */}
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-[#151515] rounded-3xl p-8 shadow-[0px_10px_30px_rgba(163,149,133,0.3)] transform transition duration-500 hover:scale-105 hover:shadow-[0px_15px_40px_rgba(163,149,133,0.6)] border border-[rgba(163,149,133,0.6)]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover rounded-2xl mb-6 border border-[rgba(163,149,133,0.5)] shadow-md"
              />
              <h3 className="text-3xl font-bold mb-2 text-[#a39585] drop-shadow-lg">
                {item.name}
              </h3>
              <p className="text-2xl font-semibold text-gray-300">{item.price}</p>
              <button className="mt-6 bg-[#a39585] text-black px-8 py-4 rounded-full font-bold tracking-wide hover:bg-[#978b7a] transition duration-300 shadow-lg hover:shadow-[0px_5px_20px_rgba(163,149,133,0.8)]">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopBestsellers;
