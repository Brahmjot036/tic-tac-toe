import shopImage from '../assets/jewel.png'; // Importing the image from assets folder

const Contact = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center pb-10"
      style={{ backgroundImage: `url(${shopImage})` }}
    >
      {/* Rose Gold Premium Box */}
      <div className="bg-[rgba(255,255,255,0.3)] backdrop-blur-xl text-white text-center p-12 w-[400px] h-auto rounded-xl shadow-2xl border border-[rgba(255,215,180,0.6)]">
        <h2 className="text-4xl font-bold text-[rgb(255,215,180)] drop-shadow-lg">UP TO 50% OFF</h2>
        <p className="text-lg mt-3 font-medium text-[rgb(255,230,200)]">
          Discover our finest collection of exquisite accessories crafted for the elite. Elevate your style with timeless luxury.
        </p>
        <p className="text-md mt-3 text-[rgb(255,220,190)] italic">
          "Luxury is in each detail."
        </p>
        <button className="mt-6 px-8 py-3 bg-[rgb(255,215,180)] text-black font-semibold rounded-full hover:bg-[rgb(255,200,160)] transition duration-300 shadow-md">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Contact;
