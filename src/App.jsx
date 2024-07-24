import React from 'react';
import './App.css';
import Header from './header/header';
import Home from './home/home';
import About from './about/about';
import Cars from './cars/cars';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <Home />
      <About></About>
      <Cars></Cars>
    </>
  );
}

export default App;
