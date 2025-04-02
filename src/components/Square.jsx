
const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-24 h-24 text-5xl font-extrabold border-2 border-neonBlue flex items-center justify-center
                 bg-glass text-neonBlue hover:text-white transition-all duration-300 
                 shadow-md hover:shadow-neonBlue hover:scale-105 rounded-lg
                 backdrop-blur-md"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
