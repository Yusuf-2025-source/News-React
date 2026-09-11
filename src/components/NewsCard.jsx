import React from 'react';

export default function NewsCard({ article, isBookmarked, onToggleBookmark, onSelectArticle }) {
  return (
    <div className="card">
      <div style={{ position: 'relative' }}>
        <img src={article.urlToImage} alt={article.title} className="card-img" />
        <button
          className={`bookmark-btn ${isBookmarked ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(article);
          }}
          title={isBookmarked ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
        >
          {isBookmarked ? '★' : '☆'}
        </button>
      </div>

      <div className="card-content">
        <span className="category-tag">{article.category}</span>
        <h3 className="card-title">{article.title}</h3>
        <p className="card-desc">{article.description}</p>
        
        <div className="card-footer">
          <button
            className="read-more-btn"
            onClick={() => onSelectArticle(article)}
            style={{
              width: '100%',
              padding: '0.6rem',
              backgroundColor: 'var(--accent)',
              color: '#0f172a',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            عرض المصادر الموثوقة 🔗
          </button>
        </div>
      </div>
    </div>
  );
}