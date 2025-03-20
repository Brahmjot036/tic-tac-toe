import React from "react";
import coolBg from "../assets/cool.png";

const About = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${coolBg})` }}
    ></div>
  );
};

export default About;
