import React, { useReducer } from "react";
import { reducer, initialState, BookingState } from "./../App";
import { fetchAPI, submitAPI } from './../ExternAPI';
import Header from './Header';
import Footer from './Footer';

const BookingForm = (props) => {
  const [BookingState, dispatcher] = useReducer(reducer, initialState);

  const dateChanger = (e, BookingState) => {
    dispatcher({ type: "DATE", payload: e.target.value });
    initialState.availableTimes = fetchAPI(new Date(e.target.value));
    console.log(fetchAPI(new Date(e.target.value)));

  };

  const timeChanger = (e) => {
    dispatcher({ type: "TIME", payload: e.target.value });
  };

  const GuestChanger = (e) => {
    dispatcher({ type: "GUESTS", payload: e.target.value });
  };

  const OccasionChanger = (e) => {
    dispatcher({ type: "OCCASION", payload: e.target.value });
  };

  const SubmitHandler = (e) => {
    console.log("WHEN: " + BookingState.date + " AT: " + BookingState.time + " HOW MANY: " + BookingState.guests + " WHY: " + BookingState.occasion);

    const formData = new FormData();

    if (submitAPI(formData)){
      window.location.href = '/ConfirmedBooking';
    }
    else{
      console.log("Error!");
    }
  };

  // submit button only enabled if relevant values for a booking were selected.
  const enabledButton = BookingState.date !== "" &&
                        BookingState.time !== "" && typeof(BookingState.time) !== "undefined" &&
                        BookingState.guests > 0  &&
                        BookingState.occasion !=="" && typeof(BookingState.time) !== "undefined";

  return (
    <>
      <Header />
      <div role="form" className="SubmitForm" aria-label="Contact information">
      <h1>Book a table</h1>

          <div className="DateSelect">
            <label htmlFor="Date">Choose a date:</label>
            <input type="date"
                  id="res-date"
                  name="DateSelectInput"
                  min="2023-01-01"
                  onChange={dateChanger} />
          </div>

          <p/>

          <label htmlFor="Time">Choose a time:</label>
          <select required onChange={timeChanger}>
          {initialState.availableTimes.map((x) => (
            <option key={x}>{x}</option>
          ))}
          </select>

          <p/>

          <label htmlFor="Guests">Number of guests:</label>
          <input  type="number"
                  id="guest-number-select"
                  min="1" max="5"
                  onChange={GuestChanger}
                  defaultValue="1"/>
          <p/>

          <label htmlFor="Occasion">Occasion</label>
          <select required name="SelectTime" id="time-select" onChange={OccasionChanger}>
          {initialState.occasion.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>

          <p/>
          <button aria-label="Submit Booking" disabled={!enabledButton} onClick={SubmitHandler}>SUBMIT</button>
        </div>
        <Footer />
      </>
    );
  }

  export default BookingForm;