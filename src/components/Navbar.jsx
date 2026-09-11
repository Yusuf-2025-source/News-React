import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      navigate('/news');
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        DAILY<span>NEWS</span>
      </Link>

      <form onSubmit={handleSearchSubmit} className="search-box">
        <input
          type="text"
          placeholder="إبحث عن خبر..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          بحث
        </button>
      </form>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>الرئيسية</NavLink>
        <NavLink to="/news" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>الأخبار</NavLink>
        <NavLink to="/bookmarks" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>المفضلة</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>عن المنصة</NavLink>
      </div>
    </nav>
  );
}