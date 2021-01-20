import React from "react";
//Importing Router features
import { Route, Switch } from "react-router-dom";

//Components being rendered into app.js
import './App.css';
import LandingText from "./components/LandingText";
import MainDisplay from "./components/MainDisplay";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Switch>
      <Route exact path="/">
        <LandingText />
      </Route>
      <Route path="/weather">
        <MainDisplay />
      </Route>
      </Switch>


      
    </div>
  );
}

export default App;
