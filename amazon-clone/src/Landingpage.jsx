import React from "react";
import "./App.css";
import Header from "./header";
import Home from "./home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Backtotop from "./backtotop";
import Footer from "./footer";



function Landingpage() {
  return (
    <>
      <Header />
      <Home/>
      <Backtotop/>
      <Footer/>
    </>
  );
}

export default Landingpage;
