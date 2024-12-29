import React, { useState } from 'react';

const App = () => {
  const data = [
    'src/assets/1.png',
    'src/assets/2.png',
    'src/assets/3.png',
    'src/assets/4.png',
    'src/assets/5.png',
  ];

  const [insects, setInsects] = useState([]);

  const generateInsects = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomX = Math.floor(Math.random() * 90);
    const randomY = Math.floor(Math.random() * 90);
    const randomSize = Math.floor(Math.random() * 60) + 20;

    const newInsect = {
      src: data[randomIndex],
      left: `${randomX}%`,
      top: `${randomY}%`,
      size: `${randomSize}px`,
    };

    setInsects((prevInsects) => [...prevInsects, newInsect]);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between gap-3 p-4 bg-gradient-to-b from-green-100 to-green-300">
      <h1 className="text-4xl font-semibold text-green-800">Insect Generator</h1>
      <div
        id="box"
        className="w-full h-[90%] bg-white border-2 border-black relative overflow-hidden rounded-lg shadow-lg"
      >
        {insects.map((insect, index) => (
          <img
            key={index}
            src={insect.src}
            alt="Insect"
            className="absolute transition-transform transform hover:scale-125"
            style={{
              left: insect.left,
              top: insect.top,
              width: insect.size,
              height: insect.size,
            }}
          />
        ))}
      </div>
      <button
        onClick={generateInsects}
        className="px-16 py-3 text-2xl bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 shadow-lg transform hover:scale-105 transition-transform active:scale-95"
      >
        Generate
      </button>
    </div>
  );
};

export default App;
