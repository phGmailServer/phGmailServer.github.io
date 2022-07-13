import React from 'react'
import { Component, useState } from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Mint from "./components/Mint"
import { Route, Routes } from 'react-router-dom'

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div>
    {/* // <Routes> */}
      <Navbar />
      {/* <Mint accounts={accounts} setAccounts={setAccounts} /> */}
      <Mint accounts={accounts} setAccounts={setAccounts} />
      {/* <Hero /> */}
      <Testimonials />
      <Demo />
      <About />
      <Footer />
    </div>
    // {/* </Routes> */}
  );
}

export default App;
