import React from 'react';
import logo from '../../images/logo.png';

export default function Header() {
  return (
    <div>
      <img className="logo" style={{ width: '229px', height: '59px' }} src={logo} alt="Logo" />
      <h1>header</h1>
    </div>
  );
}
