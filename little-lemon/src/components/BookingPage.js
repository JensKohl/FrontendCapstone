import '../index.css'
import React, { useReducer } from "react";
import { reducer, fetchAPI, initialState } from "./../App";

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
    /*alert(
      "WHEN: " +
        BookingState.date +
        " AT: " +
        BookingState.time +
        " HOW MANY: " +
        BookingState.guests +
        " WHY: " +
        BookingState.occasion
    );*/
  };

  // TODO: hide form after button submit click

  return (
    <div className="SubmitForm">
     <h1>Book a table</h1>

        <div className="DateSelect">
            Choose a data:
            <input type="date" id="res-date" onChange={dateChanger} placeholder="30.12.2022" />
        </div>

        <p/>

        Choose a time:
        <select onChange={timeChanger}>
        {initialState.availableTimes.map((x) => (
          <option key={x}>{x}</option>
        ))}
        </select>

        <p/>

        Number of guests:
        <input  type="number"
                id="guest-number-select"
                min="1" max="5"
                onChange={GuestChanger}
                defaultValue="1"/>

        <p/>

        Occasion
        <select onChange={OccasionChanger}>
        {initialState.occasion.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>

      </div>
    );
  }

  export default BookingForm;