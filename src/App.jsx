import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import profileImg from '../YoussefMedhat.jpeg';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('news_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  const allNews = [
    {
      id: 1,
      category: 'تكنولوجيا',
      title: 'إطلاق نموذج جديد من الذكاء الاصطناعي يحل التحليلات المعقدة بسرعة فائقة',
      description: 'أعلنت كبرى الشركات التكنولوجية عن جيل جديد من النماذج الذكية القادرة على المعالجة اللحظية للبيانات الضخمة.',
      urlToImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
      sources: [
        { name: 'اليوم السابع - قسم التكنولوجيا', url: 'https://news.google.com/search?q=site:youm7.com%20تكنولوجيا' },
        { name: 'المصري اليوم - قسم التكنولوجيا', url: 'https://news.google.com/search?q=site:almasryalyoum.com%20تكنولوجيا' },
        { name: 'بوابة الأهرام - قسم التكنولوجيا', url: 'https://news.google.com/search?q=site:gate.ahram.org.eg%20تكنولوجيا' }
      ]
    },
    {
      id: 2,
      category: 'اقتصاد',
      title: 'ارتفاع أسهم القطاعات التكنولوجية والأسواق العالمية تسجل مكاسب قياسية',
      description: 'شهدت البورصات العالمية نمواً ملحوظاً بدعم من نتائج أرباح شركات التقنية واستقرار أسعار الطاقة.',
      urlToImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
      sources: [
        { name: 'اليوم السابع - قسم الاقتصاد', url: 'https://news.google.com/search?q=site:youm7.com%20اقتصاد' },
        { name: 'المصري اليوم - قسم الاقتصاد', url: 'https://news.google.com/search?q=site:almasryalyoum.com%20اقتصاد' },
        { name: 'بوابة الشروق - قسم الاقتصاد', url: 'https://news.google.com/search?q=site:shorouknews.com%20اقتصاد' }
      ]
    },
    {
      id: 3,
      category: 'علوم',
      title: 'اكتشافات جديدة حول الفضاء الخارجي باستخدام التلسكوبات الفضائية الحديثة',
      description: 'نجح علماء الفلك في التقاط صور عالية الدقة لمجرات بعيدة توضح تفاصيل نشأة النجوم والكون.',
      urlToImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
      sources: [
        { name: 'اليوم السابع - قسم العلوم', url: 'https://news.google.com/search?q=site:youm7.com%20فضاء%20علوم' },
        { name: 'المصري اليوم - قسم العلوم', url: 'https://news.google.com/search?q=site:almasryalyoum.com%20علوم' },
        { name: 'الوطن - قسم العلوم', url: 'https://news.google.com/search?q=site:elwatannews.com%20علوم' }
      ]
    },
    {
      id: 4,
      category: 'رياضة',
      title: 'الاستعدادات النهائية لبطولة العالم والفرق تبدأ معسكراتها التدريبية',
      description: 'انطلقت المعسكرات المغلقة للمنتخبات المشاركة وسط توقعات بمنافسة قوية على اللقب هذا العام.',
      urlToImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop',
      sources: [
        { name: 'اليوم السابع - قسم الرياضة', url: 'https://news.google.com/search?q=site:youm7.com%20رياضة' },
        { name: 'المصري اليوم - قسم الرياضة', url: 'https://news.google.com/search?q=site:almasryalyoum.com%20رياضة' },
        { name: 'الوطن سبورت', url: 'https://news.google.com/search?q=site:sport.elwatannews.com' }
      ]
    },
    {
      id: 5,
      category: 'تكنولوجيا',
      title: 'تطوير بطاريات جديدة تزيد من مدة عمل الهواتف والسيارات الكهربائية',
      description: 'ابتكار أسلوب كيميائي جديد يسمح بشحن البطاريات بنسبة 80% في أقل من 10 دقائق دون التأثير على عمرها.',
      urlToImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
      sources: [
        { name: 'اليوم السابع - تكنولوجيا', url: 'https://news.google.com/search?q=site:youm7.com%20بطاريات%20تكنولوجيا' },
        { name: 'المصري اليوم - تكنولوجيا', url: 'https://news.google.com/search?q=site:almasryalyoum.com%20سيارات%20كهربائية' }
      ]
    },
    {
      id: 6,
      category: 'صحة',
      title: 'دراسة حديثة تؤكد أهمية ممارسة الرياضة اليومية في تحسين التركيز والذاكرة',
      description: 'أظهرت أبحاث طبية جرت على مدار عامين أن 20 دقيقة من النشاط البدني يومياً تعزز القدرات الذهنية بشكل ملحوظ.',
      urlToImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop',
      sources: [
        { name: 'اليوم السابع - صحة وطب', url: 'https://news.google.com/search?q=site:youm7.com%20صحة' },
        { name: 'المصري اليوم - قسم الصحة', url: 'https://news.google.com/search?q=site:almasryalyoum.com%20صحة' },
        { name: 'الوطن - قسم الصحة', url: 'https://news.google.com/search?q=site:elwatannews.com%20صحة' }
      ]
    }
  ];

  useEffect(() => {
    localStorage.setItem('news_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const toggleBookmark = (article) => {
    const exists = bookmarks.some((b) => b.id === article.id);
    if (exists) {
      setBookmarks(bookmarks.filter((b) => b.id !== article.id));
      showToast('تمت إزالة الخبر من المفضلة');
    } else {
      setBookmarks([...bookmarks, article]);
      showToast('تمت إضافة الخبر إلى المفضلة ★');
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory('all');
    navigate('/news');
  };

  const filteredNews = allNews.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Navbar onSearch={handleSearch} />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="hero-section">
                  <h1>مرحباً بك في منصة DAILY<span>NEWS</span></h1>
                  <p style={{ color: 'var(--text-sub)' }}>
                    تغطية إخبارية مستمرة وموثوقة لأحدث الأحداث العالمية والتحليلات اللحظية.
                  </p>
                  <button
                    className="search-btn"
                    onClick={() => navigate('/news')}
                    style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', fontSize: '1rem' }}
                  >
                    استكشف جميع الأخبار
                  </button>
                </div>

                <h2>أبرز الأخبار اليوم</h2>
                <div className="grid">
                  {allNews.slice(0, 3).map((item) => (
                    <NewsCard
                      key={item.id}
                      article={item}
                      isBookmarked={bookmarks.some((b) => b.id === item.id)}
                      onToggleBookmark={toggleBookmark}
                      onSelectArticle={(article) => setSelectedArticle(article)}
                    />
                  ))}
                </div>
              </>
            }
          />

          <Route
            path="/news"
            element={
              <>
                <h2>مركز الأخبار</h2>
                {searchQuery && (
                  <p style={{ color: 'var(--accent)' }}>
                    نتائج البحث عن: "{searchQuery}"
                    <button
                      style={{ marginRight: '10px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                      onClick={() => setSearchQuery('')}
                    >
                      ✕ إلغاء البحث
                    </button>
                  </p>
                )}

                <div className="categories-bar">
                  {['all', 'تكنولوجيا', 'اقتصاد', 'علوم', 'رياضة', 'صحة'].map((cat) => (
                    <button
                      key={cat}
                      className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat === 'all' ? 'الكل' : cat}
                    </button>
                  ))}
                </div>

                <div className="grid">
                  {filteredNews.length > 0 ? (
                    filteredNews.map((item) => (
                      <NewsCard
                        key={item.id}
                        article={item}
                        isBookmarked={bookmarks.some((b) => b.id === item.id)}
                        onToggleBookmark={toggleBookmark}
                        onSelectArticle={(article) => setSelectedArticle(article)}
                      />
                    ))
                  ) : (
                    <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '2rem', color: 'var(--text-sub)' }}>
                      لا توجد أخبار مطابقة لبحثك.
                    </p>
                  )}
                </div>
              </>
            }
          />

          <Route
            path="/bookmarks"
            element={
              <>
                <h2>الأخبار المحفوظة (المفضلة)</h2>
                {bookmarks.length > 0 ? (
                  <div className="grid">
                    {bookmarks.map((item) => (
                      <NewsCard
                        key={item.id}
                        article={item}
                        isBookmarked={true}
                        onToggleBookmark={toggleBookmark}
                        onSelectArticle={(article) => setSelectedArticle(article)}
                      />
                    ))}
                  </div>
                ) : (
                  <p style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-sub)' }}>
                    لم تقم بحفظ أي أخبار في المفضلة بعد.
                  </p>
                )}
              </>
            }
          />

          <Route
            path="/about"
            element={
              <div className="about-box" style={{ direction: 'ltr', textAlign: 'left' }}>
                {/* Developer Profile Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  paddingBottom: '2rem',
                  borderBottom: '1px solid var(--border-color)',
                  marginBottom: '2rem',
                  flexWrap: 'wrap'
                }}>
                  <img
                    src={profileImg}
                    alt="Youssef Medhat"
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      border: '3px solid var(--accent)',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <h2 style={{ margin: '0 0 0.25rem 0', fontSize: '1.75rem', color: 'var(--text-main)' }}>
                      Youssef Medhat
                    </h2>
                    <p style={{ margin: '0 0 0.5rem 0', color: 'var(--accent)', fontWeight: '600', fontSize: '1rem' }}>
                      Frontend & Web Developer
                    </p>
                    <p style={{ margin: 0, color: 'var(--text-sub)', fontSize: '0.9rem' }}>
                      🎓 4th Year Student | Computer Science Program, Faculty of Science, Ain Shams University
                    </p>
                  </div>
                </div>

                {/* About the Platform Section */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ color: 'var(--text-main)', fontSize: '1.3rem', marginBottom: '1rem' }}>
                    About DAILY<span style={{ color: 'var(--accent)' }}>NEWS</span>
                  </h3>
                  <p style={{ color: 'var(--text-sub)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                    DAILYNEWS is a modern, responsive web application designed to aggregate real-time news from top Egyptian and international news publishers into one centralized dashboard. Users can browse stories across multiple categories, perform live search queries, and manage their favorite articles seamlessly.
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1rem',
                    marginTop: '1.5rem'
                  }}>
                    <div style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent)' }}>⚡ Fast & Real-time</h4>
                      <p style={{ margin: 0, color: 'var(--text-sub)', fontSize: '0.85rem' }}>Dynamic search and filtering across various news categories without page reloads.</p>
                    </div>
                    <div style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent)' }}>📌 Bookmarking System</h4>
                      <p style={{ margin: 0, color: 'var(--text-sub)', fontSize: '0.85rem' }}>Save important news locally to review anytime using browser LocalStorage.</p>
                    </div>
                    <div style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent)' }}>🌐 Verified Sources</h4>
                      <p style={{ margin: 0, color: 'var(--text-sub)', fontSize: '0.85rem' }}>Direct links to reputable news outlets for in-depth reading.</p>
                    </div>
                  </div>
                </div>

                {/* Live Platform Stats */}
                <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  Platform Statistics
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem'
                }}>
                  <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: 'var(--accent)', fontSize: '2rem', margin: 0 }}>{allNews.length}</h3>
                    <p style={{ color: 'var(--text-sub)', margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Total Articles Available</p>
                  </div>
                  <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: 'var(--accent)', fontSize: '2rem', margin: 0 }}>{bookmarks.length}</h3>
                    <p style={{ color: 'var(--text-sub)', margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Saved Bookmarks</p>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </div>

      {selectedArticle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: '1rem'
        }}>
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            maxWidth: '500px',
            width: '100%',
            padding: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-sub)',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>

            <span className="category-tag">{selectedArticle.category}</span>
            <h3 style={{ marginTop: '0.5rem', fontSize: '1.1rem', lineHeight: '1.5' }}>{selectedArticle.title}</h3>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              اختر الصحيفة لعرض كافة أخبار قسم ({selectedArticle.category}) مباشرة:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedArticle.sources && selectedArticle.sources.map((src, index) => (
                <a
                  key={index}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.backgroundColor = '#1e293b';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-main)';
                  }}
                >
                  <span>🌐 {src.name}</span>
                  <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>عرض قسم المجال ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'var(--accent)',
          color: '#0f172a',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
        }}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}