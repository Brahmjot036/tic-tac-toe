import React from "react";
import Board from "./components/Board";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10 pointer-events-none"></div>
      <Board />
    </div>
  );
};

export default App;
