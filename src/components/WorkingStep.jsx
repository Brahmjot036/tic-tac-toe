import { FaShippingFast, FaGem, FaCheckCircle } from 'react-icons/fa';

const WorkingStep = () => {
  return (
    <div className="relative bg-black py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#161616] to-black opacity-90"></div>
      <div className="relative container mx-auto px-6 lg:px-20">

        {/* Heading */}
        <div className="text-center text-white mb-16">
          <h2 className="text-6xl font-bold font-serif tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4 font-light">
            Experience unmatched elegance, premium quality, and timeless beauty with our exquisite collection.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <FaShippingFast className="text-white text-6xl group-hover:text-gold transition-all duration-300" />,
              title: "FAST SHIPPING",
              desc: "Seamlessly secure, quick, and reliable delivery ensuring your jewelry arrives in perfect condition.",
            },
            {
              icon: <FaGem className="text-white text-6xl group-hover:text-gold transition-all duration-300" />,
              title: "FINE JEWELRY",
              desc: "Handcrafted by master artisans, our pieces represent the pinnacle of luxury and sophistication.",
            },
            {
              icon: <FaCheckCircle className="text-white text-6xl group-hover:text-gold transition-all duration-300" />,
              title: "QUALITY MATERIALS",
              desc: "We use only ethically sourced, premium-grade materials that reflect true opulence.",
            },
          ].map((item, index) => (
            <div key={index} className="group relative text-center px-8 py-14 rounded-2xl border border-gray-700 bg-opacity-20 backdrop-blur-xl bg-black shadow-xl hover:shadow-2xl hover:border-gold transition-all duration-500 transform hover:scale-105">
              
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gray-800 p-7 rounded-full shadow-lg border border-gray-600 group-hover:border-gold transition-all duration-500">
                  {item.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-200 tracking-widest uppercase group-hover:text-gold transition-all duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-4 text-lg font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingStep;
