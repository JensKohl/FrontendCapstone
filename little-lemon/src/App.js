import './App.css';
import React, { useReducer } from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import About from "./components/About";
import ConfirmedBooking from "./components/ConfirmedBooking";
import BookingForm from "./components/BookingPage";

import Hero from './components/Hero';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  availableTimes: ["Please select a time"],
  guests: 1,
  occasion: ["Anniversary", "Birthday", "Engagement"]
};

export let BookingState = {
  date: "",
  time: "",
  guests: 1,
  occasion: ""
};

const App = () =>{

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/BookingForm" element={BookingForm()} />
          <Route path="/ConfirmedBooking" element={ConfirmedBooking()} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;