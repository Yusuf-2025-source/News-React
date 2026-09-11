import React from 'react';

export default function Hero({ onExploreClick }) {
  return (
    <section id="home" className="relative px-8 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <span className="text-xs font-bold tracking-widest text-accentNeon uppercase">
          THE FOOTBALL WORLD IS HERE
        </span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-white">
          DON'T JUST READ <br />
          <span className="text-accentNeon">FOOTBALL.</span>
        </h1>
        <p className="text-2xl font-bold text-gray-200">
          عيش كل لحظة.
        </p>
        <p className="text-textMuted text-base leading-relaxed">
          أحدث أخبار كرة القدم من مصر والعالم، لحظة بلحظة، في مكان واحد.
        </p>
        <button 
          onClick={onExploreClick}
          className="bg-accentNeon text-black font-bold px-8 py-3.5 rounded-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-accentNeon/20"
        >
          EXPLORE NEWS &rarr;
        </button>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="w-80 h-80 rounded-full border border-gray-800/80 flex items-center justify-center relative">
          <div className="w-64 h-64 rounded-full border border-gray-800/40"></div>
          <div className="absolute bg-cardDark border border-gray-800 p-6 rounded-2xl w-64 shadow-2xl transform -rotate-6">
            <div className="flex items-center gap-2 text-xs font-bold text-accentRed mb-4">
              <span className="w-2 h-2 rounded-full bg-accentRed animate-pulse"></span>
              LIVE
            </div>
            <h3 className="text-xl font-extrabold text-white">FOOTBALL</h3>
            <p className="text-xs font-bold text-accentNeon uppercase tracking-widest mt-1">NEWS</p>
          </div>
        </div>
      </div>
    </section>
  );
}