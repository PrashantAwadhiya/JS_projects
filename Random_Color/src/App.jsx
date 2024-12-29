import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const boxRef = useRef(null);

  const [val1, setVal1] = useState(255);
  const [val2, setVal2] = useState(255);
  const [val3, setVal3] = useState(255);

  const generateRandomColor = () => {
    setVal1(Math.floor(Math.random() * 256));
    setVal2(Math.floor(Math.random() * 256));
    setVal3(Math.floor(Math.random() * 256));
  };

  useEffect(() => {
    boxRef.current.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;
  }, [val1, val2, val3]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-extrabold mb-10 drop-shadow-lg">
        Random Color Generator
      </h1>
      <div
        ref={boxRef}
        className="h-60 w-60 rounded-lg shadow-2xl border-4 border-white transition-transform transform hover:scale-110"
      ></div>
      <button
        onClick={generateRandomColor}
        className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Generate Color
      </button>
    </div>
  );
};

export default App;
