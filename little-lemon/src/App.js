import './App.css';
import './index.css'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () =>{

  const availableTimes = [
    { value: "19:00", label: "1900" },
    { value: "19:30", label: "1930" }
  ];
  

  return (
    <div>
        <Header />
        <Main availableTimes={availableTimes}/>
        <Footer />
    </div>
  );
}

export default App;