import React from 'react';
import "../index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Nav() {
    return (
      <nav className='Nav'>
        <div>
          <a href="https://www.w3schools.com"> Home </a>
          <a href="https://www.w3schools.com"> About </a>
          <a href="https://www.w3schools.com"> Menu </a>
          <a href="https://www.w3schools.com"> Reservations </a>
          <a href="https://www.w3schools.com"> Order Online </a>  
          <a href="https://www.w3schools.com"> Login </a>  

        </div>
      </nav>
    )
  }


export default Nav