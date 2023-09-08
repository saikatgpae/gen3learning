import React from 'react';
import './SignUp.css';

export default function SignUp() {
  return (
    <div>
      <ul className="sign-up free-trial-signin align-items-center justify-content-center" style={{ listStyleType: 'none', color: '#d3d3d3' }}>
        <li>Free Trial</li>
        <li>
          <button type="button" className="btn" style={{ color: '#fde74c', border: '1px solid #fde74c' }}>SIGN UP</button>
        </li>
      </ul>
    </div>
  );
}
