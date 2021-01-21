import React, { useState }  from "react";
//Importing Router features
import { Route, Switch } from "react-router-dom";

//Components being rendered into app.js
import './App.css';
import LandingText from "./components/LandingText";
import MainDisplay from "./components/MainDisplay";
import SearchBar from "./components/SearchBar";
//Setting our State in function App
function App(props) {
  const [weather, setWeather] = useState({});
  const [zip, setZip] = useState("");

//Fetching API call and listening to the search bar
const handleSubmit =  async (e) => {
  e.preventDefault();

    const data = `http://api.weatherstack.com/current?access_key=b5e736ba37400f6d38f6cea5ec87816f&query=${zip}`;
    const response = await fetch(data);
    const checkweather = await response.json();
    setWeather(checkweather);
    console.log(weather);
    props.history.push("/weather");

    //props history push causing a typerror. Consult with team lead tomorrow

}


  return (
    <div className="App">
      <SearchBar setZip={setZip} zip={zip} handleSubmit={handleSubmit} />
      <Switch>
      <Route exact path="/">
        <LandingText />
      </Route>
      <Route path="/weather">
        <MainDisplay weather={weather} />
      </Route>
      </Switch>


      
    </div>
  );
}

export default App;
