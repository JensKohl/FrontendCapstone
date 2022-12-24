import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';

const App = () =>{
  return (
    <div>
        <Header />
        <Nav />
        <Main />
        <Footer />
    </div>
  );
}

export default App;