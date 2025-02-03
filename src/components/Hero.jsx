import React from 'react';
import heroImg from "../assets/product3.jpg";
import productImg1 from "../assets/product1.jpg";
import productImg2 from "../assets/product2.jpg";
// import productImg3 from "../assets/product3.webp";

const Hero = () => {
  return (
    <section className='bg-black text-white flex items-center justify-center py-20 relative'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 gap-12 h-full'>
        {/* Left Side - Text Content */}
        <div className='md:w-1/2 text-left'>
          <h1 className='text-6xl font-serif font-bold mb-4 leading-tight'>New <br/>ARRIVALS</h1>
          <p className='text-xl mb-8 tracking-wide'>SHOP THE COLLECTION</p>
          <button className='border border-black text-black py-3 px-8 font-medium rounded-md hover:bg-black hover:text-white transition'>
            SHOP NOW
          </button>
        </div>

        {/* Right Side - Images */}
        <div className='md:w-1/2 top-10 flex relative'>
          {/* Main Image */}
          <img src={heroImg} alt="Jewelry" className='relative w-[70%] right-1 ml-8 border-4 border-white shadow-lg' />
          
          {/* Small Overlapping Images */}
          <img src={productImg1} alt="Bracelet" className='absolute top-20 right-2 w-80 border-4 border-white shadow-lg rotate-6' />
          <img src={productImg2} alt="Rings" className='absolute top-60 right-10 w-60 h-40 border-4 border-white shadow-lg rotate-[-4deg]' /> 
        </div>
      </div>
    </section>
  );
};

export default Hero;