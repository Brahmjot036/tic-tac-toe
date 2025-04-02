import  { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const isDraw = squares.every((square) => square !== null) && !winner;
  const status = winner
    ? `👑 Winner: ${winner}!`
    : isDraw
    ? "😵 It's a Draw!"
    : `🚀 Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-neonBlue mb-6 tracking-wide neon-text animate-pulse">
        {status}
      </h1>
      <div className="grid grid-cols-3 gap-4 p-5 bg-glass border-2 border-neonBlue rounded-2xl shadow-2xl backdrop-blur-md">
        {squares.map((square, index) => (
          <Square key={index} value={square} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button
        className="mt-6 px-8 py-4 bg-gradient-to-r from-neonBlue to-neonPink text-black font-bold 
                   rounded-xl hover:scale-105 transition-all duration-300 neon-button shadow-lg 
                   shadow-neonPink backdrop-blur-md"
        onClick={() => setSquares(Array(9).fill(null))}
      >
        🔄 Restart Game
      </button>
    </div>
  );
};

export default Board;
