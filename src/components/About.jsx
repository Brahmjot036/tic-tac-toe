import React, { useState, useEffect } from "react";
import productImg1 from "../assets/product1.jpg";

const About = () => {
  const [zoom, setZoom] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const zoomScale = 1 + scrollPosition / 5000; // Adjust the zoom factor as needed
    setZoom(zoomScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-transparent animate-fade-in">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 overflow-hidden animate-zoom-in">
        <img
          src={productImg1}
          alt="Brand Banner"
          className="w-full h-full object-cover"
          style={{
            transform: `scale(${zoom})`, // Apply the zoom effect dynamically
            transition: "transform 0.1s ease-out", // Smooth transition for zooming
          }}
        />
      </div>

      {/* Glassmorphic Text Content */}
      <div className="relative flex flex-col items-center justify-center text-center p-10 max-w-3xl bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-xl animate-slide-in">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 tracking-wide font-serif drop-shadow-lg">
          <em className="font-semibold">ABOUT</em> OUR BRAND
        </h2>
        <p className="mt-6 text-xl text-gray-200 font-light leading-relaxed tracking-wide font-serif">
          Our brand is a celebration of the extraordinary moments in your life,
          capturing the spirit of authenticity and refined craftsmanship. Each
          piece in our collection is more than a mere accessory; it's a
          narrative waiting to be told. From delicate necklaces that whisper of
          grace to bold statement pieces that exude confidence, our jewelry is
          designed to accompany you on your journey, reflecting the chapters of
          your unique story.
        </p>

        {/* Contact Button with Premium Glow */}
        <a
          href="/pages/contact"
          className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-lg hover:shadow-gray-500/50 transition-all duration-300 hover:scale-105 font-serif tracking-wide"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default About;
