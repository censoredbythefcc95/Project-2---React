import React, { useState }  from "react";
//Importing Router features
import { Route, Switch } from "react-router-dom";

//Components being rendered into app.js
import './App.css';
import LandingText from "./components/LandingText";
import MainDisplay from "./components/MainDisplay";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import About from "./components/About";
//Setting our State in function App
function App(props) {
  const [weather, setWeather] = useState({});
  const [zip, setZip] = useState("");

//Fetching API call and listening to the search bar
const handleSubmit =  async (e) => {
  e.preventDefault();

    const data = `https://api.weatherstack.com/current?access_key=b5e736ba37400f6d38f6cea5ec87816f&query=${zip}&units=f`;
    const response = await fetch(data);
    const checkweather = await response.json();
    setWeather(checkweather);
    console.log(weather);
    props.history.push("/weather");

    //props history push causing a typerror. Consult with team lead tomorrow

}
      // const updateInfo = () => {
      //   return (
      //     <MainDisplay data={data} />
      //   )
      // }

  return (
    <div className="App">
      <NavBar />
      <SearchBar setZip={setZip} zip={zip} handleSubmit={handleSubmit} />
      <Switch>
      <Route exact path="/">
        <LandingText />
      </Route>
      <Route path="/weather">
        <MainDisplay weather={weather} />
      </Route>
      <Route path="/about">
      <About />
      </Route>
      </Switch>


      
    </div>
  );
}

export default App;
