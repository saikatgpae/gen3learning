import React from 'react';
import Menu from '../Menu/Menu';
import SignUp from '../SignUp/SignUp';

export default function Desktop() {
  const menuItemsArray = ['Home', 'About Us', 'Contact Us', 'Programs', 'More'];
  return (
    <>
      <Menu menuItemsArray={menuItemsArray} />
      <SignUp />
    </>
  );
}
