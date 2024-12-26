import React, { useState } from 'react'
import thumnailImg from '../assets/video-thumbnail.webp'
import { IoPlay } from 'react-icons/io5';
import {IoArrowForwardCircleSharp} from "react-icons/io5"

const About=()=> {
  const[isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
  }

  return (
    <div id='about' className='bg-[#f8f8fc] pb-16 pt-20 '>
      <div className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
          {/* left side */}
          <div className='md:w-1/2 w-full mb-8 md:mb-8'>
            {
              !isVideoPlaying ? (
                <div className='relative'>
                  <img src={thumnailImg} alt="video thumbnail" className='w-full md:h-[446px] h-auto rounded-lg object-cover'/>
                  <button
                  onClick={handleVideoPlay}
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer'><IoPlay className='size-12 text-white'/></button>
                </div>
              ) : (null)
            }
          </div>
          {/* right side */}
          <div className='md:w-1/2 w-full mb-12'>
          <h2 className='text-4xl font-secondary font-bold mb-4 leading-snug'>About Us</h2>
        <p className='text-lg mb-12 md:pr-8'>At Mindleep, we are committed to helping you prioritize your mental wellness through personalized support and guidance. Whether you're seeking to improve relationships, build self-confidence, or overcome personal challenges, our expert team provides the tools you need to create lasting positive change. We believe that mental health is a journey, and we’re here to support you every step of the way.</p>
        <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
          <a href="#contact" className='flex gap-1 items-center'>
            <span>Get Started</span>
            <IoArrowForwardCircleSharp/>
          </a>
        </button>
          </div>
        </div>
        {
          isVideoPlaying && (
            <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
            <div className='relative w-full h-full flex items-center justify-center'>
              <iframe width="560"
              height="315" 
              src="https://www.youtube.com/embed/ppTH9hMrDjA?si=I1-fUJNaZcUuWNqI" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
              className = 'rounded-lg'
              >
              </iframe>
              <button onClick={handleCloseVideo} className='absolute top-4 right-4 text-white text-2xl cursor-pointer'>
                X
              </button>
            </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default About