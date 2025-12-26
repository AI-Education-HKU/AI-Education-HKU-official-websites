// src/components/Header/index.jsx
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="apple-header">
      <div className="container">
        {/* 苹果风格 Logo/品牌名 */}
        <div className="header-logo">
          <Link to="/">AI Education</Link>
        </div>
        {/* 导航链接（苹果官网风格的极简导航） */}
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;