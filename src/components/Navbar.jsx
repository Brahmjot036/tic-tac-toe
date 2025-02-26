// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPinterestP, FaSnapchatGhost } from "react-icons/fa";
import { motion } from "framer-motion";
import NavbarBackground from "../assets/navbg.png"; // Import the background image

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    const handleScroll = () => {
        const sections = ["home", "catalog", "contact"];
        const scrollPosition = window.scrollY + 100;
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Social Media Bar */}
            <div className="w-full bg-white py-2 px-6 flex justify-start items-center text-gray-500 text-xs border-b border-gray-300 tracking-wide">
                <div className="flex space-x-6">
                    <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-black">
                        <FaFacebookF />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-black">
                        <FaInstagram />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-black">
                        <FaTwitter />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-black">
                        <FaLinkedinIn />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-black">
                        <FaYoutube />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-black">
                        <FaPinterestP />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-black">
                        <FaSnapchatGhost />
                    </motion.a>
                </div>
            </div>

            {/* Main Navbar */}
            <header
                className="text-black py-6 px-10 fixed top-10 left-0 right-0 z-50 shadow-md border border-gray-200 backdrop-blur-md w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${NavbarBackground})` }} // Set the background image
            >
                <div className="container mx-auto flex justify-between items-center h-20">
                    {/* Left - Navigation */}
                    <nav className="hidden md:flex">
                        <ul className="font-light text-sm flex space-x-10 uppercase tracking-widest text-black">
                            {["Home", "Catalog", "Contact"].map((item, index) => (
                                <li key={index}>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleCloseMenu();
                                            document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className={`transition duration-300 ease-in-out ${
                                            activeSection === item.toLowerCase()
                                                ? "font-medium border-b-2 border-black pb-1"
                                                : "hover:opacity-70"
                                        }`}
                                    >
                                        {item}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Center - Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <a href="/">
                            <img src="/image.png" alt="logo" className="max-h-52 mt-7" />
                        </a>
                    </div>

                    {/* Right - Icons */}
                    <div className="flex items-center space-x-6">
                        <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
                            <FiSearch className="text-xl" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
                            <FiShoppingBag className="text-xl" />
                        </motion.div>
                        <button onClick={handleToggle} className="md:hidden">
                            <HiOutlineMenuAlt3 className="text-xl" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <nav className="absolute top-full left-0 w-full bg-[#F8F6F4] z-20 md:hidden shadow-lg">
                        <ul className="flex flex-col p-6 space-y-4 text-lg">
                            {["Home", "Catalog", "Contact"].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleCloseMenu();
                                            document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="block text-black text-center py-2 border-b border-gray-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Navbar;
