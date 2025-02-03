import React, { useState, useEffect } from 'react';
import thumnailImg from '../assets/video-thumbnail.webp';
import { IoPlay } from 'react-icons/io5';
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import productImg1 from "../assets/product1.jpg";
const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const zoomScale = 1 + scrollPosition / 5000; // Adjust the zoom factor as needed
    setZoom(zoomScale);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-transparent animate-fade-in">
      <div className="absolute inset-0 overflow-hidden animate-zoom-in">
        <img
          src={productImg1}
          alt="Brand Banner"
          className="w-full h-full object-cover"
          style={{
            transform: `scale(${zoom})`, // Apply the zoom effect dynamically
            transition: 'transform 0.1s ease-out' // Smooth transition for zooming
          }}
        />
      </div>
      <div className="relative flex flex-col items-center justify-center text-center p-6 max-w-3xl rounded-lg shadow-md animate-slide-in">
        <h2 className="text-4xl font-bold text-white">
          <em className="font-semibold">ABOUT</em> OUR BRAND
        </h2>
        <p className="mt-4 text-lg text-white">
          Our brand is a celebration of the extraordinary moments in your life,
          capturing the spirit of authenticity and refined craftsmanship. Each
          piece in our collection is more than a mere accessory; it's a
          narrative waiting to be told. From delicate necklaces that whisper of
          grace to bold statement pieces that exude confidence, our jewelry is
          designed to accompany you on your journey, reflecting the chapters of
          your unique story.
        </p>
        <a
          href="/pages/contact"
          className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default About;
