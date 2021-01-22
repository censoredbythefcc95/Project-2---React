import React from "react";

const HighLow = (props) => {
    return (
        <div>
            <h3>Sky condition: {props.weather.current.weather_descriptions}</h3>
            <h3>Visibility: {props.weather.current.visibility} miles </h3>
                <div className="weather-icon">
                <img src={props.weather.current.weather_icons} /> 
                </div>
        </div>
    )
}
export default HighLow;