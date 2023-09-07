import React from 'react';
import Menu from '../Menu/Menu';

export default function Desktop() {
  const menuItemsArray = ['Home', 'About Us', 'Contact Us', 'Programs', 'More'];
  return (
    <div>
      <Menu menuItemsArray={menuItemsArray} />
    </div>
  );
}
