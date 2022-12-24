import React from 'react';
import mainLogo from '../images/Asset 7@4x.png';

const Header = () =>{
    return (
      <div>
        <h1>Test</h1>
        <img src={mainLogo} alt="Avatar" class="rounded-corners" width={250} height={250}></img>
      </div>
    );
}

export default Header