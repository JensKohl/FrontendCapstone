import './App.css';
import './index.css'
import React, { useReducer } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export const reducer = (BookingState, action) => {
  switch (action.type) {
    case "DATE":
      return {
        ...BookingState,
        date: action.payload
      };
    case "TIME":
      return {
        ...BookingState,
        time: action.payload
      };
    case "GUESTS":
      return {
        ...BookingState,
        guests: action.payload
      };

    case "OCCASION":
      return {
        ...BookingState,
        occasion: action.payload
      };

    default:
      break;
  }
};

export const initialState = {
  date: "",
  availableTimes: ["17:00", "18:00"],
  guests: 1,
  occasion: ["Anniversary", "Birthday"]
};

export let BookingState = {
  date: "",
  time: "",
  guests: 1,
  occasion: ""
};

const App = () =>{

  return (
    <div>
        <Header />
        <Main bookingstate={BookingState}/>
        <Footer />
    </div>
  );
}

export default App;