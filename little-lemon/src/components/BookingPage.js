import React, {useState} from "react";
import '../index.css'
import fetchAPI from "../App"

const BookingForm = ({ timeOptions, setTimeSlots, setDate}) => {

    // dictionary for occasion options
    const occasionOptions = [
      {value: "Anniversary", label:"Anniversary"},
      {value: "Birthday", label:"Birthday"}
    ] 
    // define hooks and initialize them
    const [date, setDates] = React.useState(new Date().toLocaleDateString());
    const [timeValue, settimeValue] = React.useState("");
    const [guestNumber, setguestNumber] = React.useState("1");
    const [selOccasion, setoccasionChange] = React.useState(occasionOptions[0].value);

    // define event handler for date change. TODO: date of today
    const handleDateChange = event => {
        setDates(event.target.value);
        setDate(new Date(event.target.value));
      };

    // define event handler for time change
    const handleTimeChange  = (event) => {
      settimeValue(event.target.value);
    };

    // define event handler for number of guests change
    const handleGuestNumberChange = event => {
        setguestNumber(event.target.value);
    };

    // define event handler for occasion
    const handleOccasionChange = event => {
      setoccasionChange(event.target.value);
    };

    // define event handler for button
    const handleSubmitButton = (event) => {
        console.log(
            "Date: " + date +
            " Time: " + timeValue +
            " Guests: " + guestNumber +
            " Occasion" + selOccasion
        );
      };

    const handleAPITest  = (event) => {
        console.log(date);
    }

    return (
      <div className="SubmitForm">
        <h1>Book a table</h1>

        <div className="DateSelect">
            Choose a data:
            <input type="date" id="res-date" onChange={handleDateChange} />
        </div>

        <p/>

        Choose a time:
        <select value={timeOptions.value} onChange={handleTimeChange}>
          {timeOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
            ))}
        </select>

        <p/>

        Number of guests:
        <input  type="number"
                id="guest-number-select"
                min="1" max="5"
                onChange={handleGuestNumberChange}
                defaultValue="1"/>

        <p/>

        Occasion
        <select value={occasionOptions.value}
                onChange={handleOccasionChange}>
                {occasionOptions.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
        </select>

        <p/>
        <button onClick={handleSubmitButton}>Submit</button>

        <button onClick={handleAPITest}>TestAPI</button>

      </div>
    );
  }

  export default BookingForm;