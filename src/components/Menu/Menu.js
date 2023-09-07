import React from 'react';

export default function Menu(prop) {
  const { menuItemsArray } = prop;
  return (
    <ul style={{ color: '#d3d3d3', listStyleType: 'none' }}>
      {menuItemsArray.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
