import React from "react";
import '../index.css'
import BookingForm from "./BookingPage";
import { BookingState } from "./../App";
import Hero from "./Hero";
import Specials from "./Specials";


const Main = props =>{
  return (
    <main className="grid-container">
      <div className="Main">
        <Hero/>
        <Specials/>
    </div>
    </main>
  );
}

export default Main;
