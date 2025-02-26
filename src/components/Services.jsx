import collectionImg1 from "../assets/ring.png";
import collectionImg2 from "../assets/necklace.png";
import collectionImg3 from "../assets/bracelet.png";
import collectionImg4 from "../assets/watch.png";

const Services = () => {
  return (
    <div id="services" className="bg-black py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-80"></div>
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-12 tracking-wide font-serif uppercase">
          The Luxury Collection
        </h2>
        <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-16 font-light">
          Experience the elegance and grace of our finest jewelry collection, crafted for the elite.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[ 
            { img: collectionImg1, name: "Opulent Rings" },
            { img: collectionImg2, name: "Diamond Necklaces" },
            { img: collectionImg3, name: "Silver Bracelets" },
            { img: collectionImg4, name: "Luxury Watches" }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <a href="#" className="block overflow-hidden rounded-2xl shadow-lg border border-gray-700 hover:border-white transition-all duration-500">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-all duration-500 rounded-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              <p className="text-center text-white font-semibold text-xl mt-5 uppercase tracking-wider">
                {item.name}
              </p>
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7M5 12h13" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
