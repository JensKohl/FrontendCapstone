import React from 'react';
import mainLogo from '../images/Logo2.png';
import "../index.css";
import Nav from "./Nav"

const Header = () =>{
    return (
      <header className='Header'>
          <img src={mainLogo} className='Logo' alt="logo" width={150} height={50}></img> 
        <Nav className="Nav" />
      </header>
    );
}

export default Header


