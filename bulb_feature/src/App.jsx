import React, { useRef, useState } from 'react';

const App = () => {
  const imgRef = useRef(null);
  const [isBulbOn, setIsBulbOn] = useState(false);

  const bulbChange = () => {
    if (isBulbOn) {
      imgRef.current.src = 'src/assets/bulbOFF.png';
      imgRef.current.style.filter = 'none';
    } else {
      imgRef.current.src = 'src/assets/bulbON.png';
      imgRef.current.style.filter = 'drop-shadow(0 0 60px yellow)';
    }
    setIsBulbOn(!isBulbOn);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <h1 className="text-5xl font-bold mb-8">Bulb ON/OFF</h1>
      <div className="relative">
        <img
          ref={imgRef}
          className="h-80 transition-transform duration-300"
          src="src/assets/bulbOFF.png"
          alt="bulb"
        />
      </div>
      <button
        onClick={bulbChange}
        className={`mt-10 px-10 py-3 text-2xl font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 ${
          isBulbOn
            ? 'bg-red-600 hover:bg-red-700 text-white'
            : 'bg-green-600 hover:bg-green-700 text-white'
        }`}
      >
        {isBulbOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
};

export default App;
