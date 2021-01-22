import React from "react";

const CurrentTemperature = (props) => {
    return (
        <div>
             <div className="weather-icon">
                <img src={props.weather.current.weather_icons} /> 
            </div>
            <h3> {props.weather.current.temperature} °F</h3>
        </div>
    )
}

export default CurrentTemperature;