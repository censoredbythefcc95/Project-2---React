import React from "react";
//Importing child components
import Location from "./Location";
import CurrentTemperature from "./CurrentTemperature";
import HighLow from "./HighLow";

const MainDisplay = (props) => {
    return (
        <div className="MainDisplay">
            {props.weather.location ?<Location weather={props.weather} /> : ""}
            {props.weather.current ? <CurrentTemperature weather={props.weather} /> : ""}
            {props.weather.current ? <HighLow weather={props.weather} /> : ""}
        </div>
    )
}

export default MainDisplay;