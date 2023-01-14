import React from 'react';
import LittleLemonLogo from '../images/Logo.svg';
import "../index.css";
import Nav from "./Nav"

const Header = () =>{
    return (
      <header>
        <div className="container">
          <img src={LittleLemonLogo} alt="Little Lemon logo" />
          <Nav/>
        </div>
      </header>
    );
}

export default Header;
