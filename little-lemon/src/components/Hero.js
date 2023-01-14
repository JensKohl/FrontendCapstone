import { React, useState } from "react";
import { BookingState } from "./../App";
import "../App.css";
import BookingForm from "./BookingPage";
import RestaurantPic from '../images/restauranfood.jpg';
import { Link } from "react-router-dom";

export const HeroForm = (props) => {
  return (
    <section id="HeroForm">
      <div className="container">
        <div className="contentText">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

          <button aria-label="Reserve a table">
            <Link to="BookingForm">Reserve a table</Link>
          </button>

          <img src={RestaurantPic} alt="logo" width={250} height={250}/>
        </div>
      </div>
    </section>
  );
}

export default HeroForm;
