import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav className='Nav'>
        <div>
            <Link to="/">Home</Link>
            <Link to="/">Menu</Link>
            <Link to="/BookingForm">Reservation</Link>
            <Link to="/order">Order Online</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </div>
      </nav>
    )
  }


export default Nav