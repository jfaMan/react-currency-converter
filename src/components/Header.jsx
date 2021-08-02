import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="logo192.png" alt="React Logo" />
      </div>
      <div className="header-text">
        <h1>React Currency Converter</h1>
        <p>Check exchange rates with the power of React</p>
      </div>
    </div>
  );
};

export default Header;
