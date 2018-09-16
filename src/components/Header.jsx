import React from 'react';
import { Link } from 'react-router-dom';
import northcodersLogoDark from '../images/northcodersLogoDark.png';
import '../css/Header.css';

const Header = () => {
  return <div>
      <Link to="/" className="header-container">
        <img src={northcodersLogoDark} alt="northcoders-logo" className="NC-logo" />
        <h1 className='news-header'>NEWS</h1>
      </Link>
    </div>;
};

export default Header;