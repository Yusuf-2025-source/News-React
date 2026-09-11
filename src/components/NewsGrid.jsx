import React from 'react';
import NewsCard from './NewsCard';

export default function NewsGrid({ articles, loading }) {
  return (
    <section id="news" className="px-8 py-16 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-xs font-bold text-accentNeon block mb-1">أحدث الأخبار</span>
          <h2 className="text-4xl font-black text-white">Football News</h2>
        </div>
        <span className="text-xs font-bold text-textMuted uppercase tracking-widest hidden md:block">
          LIVE FOOTBALL UPDATES
        </span>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-cardDark border border-gray-800 h-80 rounded-xl animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}