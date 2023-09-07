import React from 'react';

export default function Menu(prop) {
  const { menuItemsArray } = prop;
  return (
    <ul>
      {menuItemsArray.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
