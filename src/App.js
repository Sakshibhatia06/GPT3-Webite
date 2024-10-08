import React from "react";
import { Footer, Blog, Possibility,Feature,WhatGPT3,Header} from "./containers";
import {CTA,Brand,Navbar} from "./components"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
