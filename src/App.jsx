import React, { Component } from "react";
import Osterfest from "./components/osterfest";
import "./App.css";
import AnimatedBox from "./components/AnimatedBox";
import AnimatedText from "./components/AnimatedText";

class App extends Component {
 state = {}

render() {
  return(
    <div className="main-container">      
      <AnimatedText />
      <Osterfest></Osterfest>
      <AnimatedBox />
    </div>
  );
}
}

export default App;