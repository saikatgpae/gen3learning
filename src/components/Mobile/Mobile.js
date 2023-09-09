/* eslint-disable */
import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import './Mobile.css';
import SignUp from '../SignUp/SignUp';

export default function Mobile() {
  const [showMenu, setShowMenu] = useState(false);
  const menuItemsArray = ['Home', 'About Us', 'Contact Us', 'Programs', 'More'];

  // Handle th button click
  const handleClick= () => {
    (!showMenu)? setShowMenu(true) : setShowMenu(false);
  };

  return (
    <div className="mobile-menu">
      <button type="button" className="burger-button" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#f0f8ff" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      {
        showMenu ? <div className="menu-display"><Menu menuItemsArray={menuItemsArray} /><SignUp /></div> : null
      }
    </div>
  );
}
