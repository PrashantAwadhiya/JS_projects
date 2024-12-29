import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const imgRef = useRef(null);
  const [hueValue, setHueValue] = useState(0);

  const generateRandomColor = () => {
    setHueValue(Math.floor(Math.random() * 360));
  };

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.filter = `hue-rotate(${hueValue}deg)`;
    }
  }, [hueValue]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 text-white">
      <h1 className="text-5xl font-extrabold drop-shadow-md mb-10">
        Change color of bulbs
      </h1>
      <div className="flex justify-center items-center bg-white  rounded-xl shadow-2xl">
        <img
          ref={imgRef}
          src="https://clipart-library.com/image_gallery2/Christmas-Lights-PNG-Images.png"
          alt="Random PNG"
          className="w-[500px] h-[500px] object-contain rounded- transition-transform transform hover:scale-110"
        />
      </div>
      <button
        onClick={generateRandomColor}
        className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-xl px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all"
      >
        Generate Random Color
      </button>
    </div>
  );
};

export default App;
