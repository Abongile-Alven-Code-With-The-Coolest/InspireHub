import "../style/style.css";
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div>
      <div className='topnav'>
        <nav className="navigation">
          <NavLink to='/' exact activeClassName='active-link'>Home</NavLink>
          <NavLink to='/about' activeClassName='active-link'>About</NavLink>
          <NavLink to='/explore' activeClassName='active-link'>Explore/Blog</NavLink>
          <NavLink to='/FAQ' activeClassName='active-link'>FAQ</NavLink>
          <NavLink to='/signup' activeClassName='active-link'>Sign Up</NavLink>
          <NavLink to='/login' activeClassName='active-link'>Sign In</NavLink>
        </nav>
        <button onClick={toggleTheme} 
          style={{
            float: 'right', 
            padding: '14px 16px',
            backgroundColor: '#C231',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <br />
        <h1 className='welcome_header'>
          InspireHUB.com
        </h1>
        <p className='intro-para'>
          Explore InspireHub.com: Blog freely and engage with a community of friendly, creative individuals. <button className='createAccount'>
            Start Now!</button>
        </p>
      </div>
    </div>
  );
}

export default Header;
