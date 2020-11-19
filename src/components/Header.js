import React from 'react';
import logo from '../img/hookedin-logo-header.png';

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <img className="logo-header" alt="logo" src={logo} />
    );
  }
}

export default Header;