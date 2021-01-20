import React from "react";
//Importing Router features
import { Route } from "react-router-dom";

//Components being rendered into app.js
import './App.css';
import LandingText from "./components/LandingText";
import MainDisplay from "./components/MainDisplay";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <LandingText />
      </Route>
      <Route path="/weather">
        <MainDisplay />
      </Route>


      
    </div>
  );
}

export default App;
