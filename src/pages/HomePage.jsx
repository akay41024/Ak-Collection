import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Products from '../components/Products';

const HomePage = () => {
  return (
    <>
        <Home/>
        <Products/>
        <About/>
        <Contact/>
        <Feedback/>
        <Footer/>
    </>
  )
}

export default HomePage;