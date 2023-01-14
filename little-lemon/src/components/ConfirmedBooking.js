import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BookingState } from "../App";

const ConfirmedBooking = () => {
  return (
    <>
      <Header />
      <div className="ConfirmedBooking">
        <div className="container">
          <h1>Your table reservation was successful!</h1>
          <p> We are looking forward to see you!</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ConfirmedBooking