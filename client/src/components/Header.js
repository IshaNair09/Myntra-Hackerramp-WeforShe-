import React from 'react';
import './Header.css';
// import logo from '../../public/logo.png';

const Header = () => {
  return (
    <header className="header">
      
      <nav className="nav">
        <ul>
          <li>Catalogue</li>
          <li>Fashion</li>
          <li>Favorite</li>
          <li>Lifestyle</li>
          <li>Signup</li>
        </ul>
      </nav>
    
    </header>
  );
}

export default Header;
//  <img src={logo} alt="Logo" className="logo" />