import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return <div>
      <Link to="/" className="header-container">
        <img src={'../../images/northcoders-logo-dark.png'} alt="northcoders-logo" className="NC-logo" />
        <h1>NEWS</h1>
      </Link>
    </div>;
};

export default Header;