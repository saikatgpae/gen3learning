import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import './Menu.css';

export default function Menu(prop) {
  const { menuItemsArray } = prop;
  return (
    <div className="menu align-items-center">
      <ul className="menu-items" style={{ listStyleType: 'none', color: '#d3d3d3' }}>
        {menuItemsArray.map((item) => <li className="menu-items" key={item}>{item}</li>)}
      </ul>
      <ul className="free-trial-signin align-items-center" style={{ listStyleType: 'none', color: '#d3d3d3' }}>
        <li>Free Trial</li>
        <li>
          <button type="button" className="btn" style={{ color: '#fde74c', border: '1px solid #fde74c' }}>SIGN UP</button>
        </li>
      </ul>
    </div>
  );
}
