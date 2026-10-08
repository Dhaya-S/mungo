import React, { useState } from 'react';

export default function Navbar({ currentPage = 'home' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="logo" style={{ textDecoration: 'none' }}>
        <div className="logo-icon">
          <img
            src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784019754/a44962e9-259e-4885-a21c-31063e437a8a.png"
            alt="Mungo Logo"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <span>Mungo</span>
      </a>

      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        id="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="nav-links">
        <li>
          <a href="/" className={currentPage === 'home' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a
            href="/features"
            className={
              currentPage === 'features' || currentPage === 'services'
                ? 'active'
                : ''
            }
          >
            Service
          </a>
        </li>
        <li>
          <a href="/about" className={currentPage === 'about' ? 'active' : ''}>
            About us
          </a>
        </li>
        <li>
          <a
            href="/careers"
            className={currentPage === 'careers' ? 'active' : ''}
          >
            Careers
          </a>
        </li>
        <li>
          <a href="/blog" className={currentPage === 'blog' ? 'active' : ''}>
            Blog
          </a>
        </li>
      </ul>

      <a href="#" className="btn btn-primary">
        Download App
      </a>
    </nav>
  );
}
