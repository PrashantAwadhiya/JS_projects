import React, { useRef, useState } from 'react';

const App = () => {
  const data = [
    {
      name: '🍾 Mumbai Indians',
      logo: 'src/assets/mi.jpg',
      theme: '#0136FE',
    },
    {
      name: '🍾 Chennai Super Kings',
      logo: 'src/assets/csk.jpg',
      theme: '#FFC704',
    },
    {
      name: '🍾 Kolkata Knight Riders',
      logo: 'src/assets/kkr.jpg',
      theme: '#3A1879',
    },
    {
      name: '🍾 Royal Challengers Bangalore',
      logo: 'src/assets/rcb.jpg',
      theme: '#9E0017',
    },
    {
      name: '🍾 Delhi Capitals',
      logo: 'src/assets/dc.jpg',
      theme: '#1074FF',
    },
    {
      name: '🍾 Sunrisers Hyderabad',
      logo: 'src/assets/srh.jpg',
      theme: '#FF6D00',
    },
    {
      name: '🍾 Punjab Kings',
      logo: 'src/assets/pk.jpg',
      theme: '#FE0024',
    },
    {
      name: '🍾 Rajasthan Royals',
      logo: 'src/assets/rr.jpg',
      theme: '#FE5CFF',
    },
    {
      name: '🍾 Lucknow Super Giants',
      logo: 'src/assets/lsg.jpg',
      theme: '#FEB101',
    },
    {
      name: '🍾 Gujarat Titans',
      logo: 'src/assets/gt.jpg',
      theme: '#918785',
    },
  ];

  const [winnerTeam, setWinnerTeam] = useState({
    logo: 'src/assets/ipl.jpg',
    theme: '#000000',
  });

  const imgRef = useRef(null);

  const change = () => {
    const randomTeam = data[Math.floor(Math.random() * data.length)];
    setWinnerTeam(randomTeam);
    imgRef.current.src = randomTeam.logo;
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between p-8 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">IPL WINNER PREDICTOR</h1>
      <div
        className="h-[65%] w-[22%] rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          boxShadow: `0px 8px 25px ${winnerTeam.theme}`,
        }}
      >
        <img
          ref={imgRef}
          className="object-cover object-center rounded-2xl h-full w-full"
          src={winnerTeam.logo}
          alt="IPL Winner"
        />
      </div>
      <span
        className="px-10 py-2 uppercase mt-2 flex items-center font-bold text-3xl"
        style={{
          color: winnerTeam.theme,
        }}
      >
        {winnerTeam.name || ''}
      </span>
      <button
        onClick={change}
        className="px-16 py-2 text-2xl font-semibold rounded-lg bg-blue-700 text-white active:scale-95 hover:bg-blue-800 transition-all"
      >
        PREDICT
      </button>
    </div>
  );
};

export default App;
