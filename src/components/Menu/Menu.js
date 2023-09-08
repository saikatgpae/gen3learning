import React from 'react';
import './Menu.css';

export default function Menu(prop) {
  const { menuItemsArray } = prop;
  return (
    <div>
      <ul className="menu menu-items" style={{ listStyleType: 'none', color: '#d3d3d3' }}>
        {menuItemsArray.map((item) => <li className="menu-items" key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
