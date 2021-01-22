import React from "react";

const Location = (props) => {
    return (
        <div>
        <div className="location-text">
            <h3>{props.weather.location.name}, {props.weather.location.region} </h3>
            </div>
            <div className="weather-icon">
                <img src={props.weather.current.weather_icons} /> 
            </div>
        </div>
    )
}

export default Location;