import React from "react";

const HighLow = (props) => {
    return (
        <div>
            <h3>Feels like: {props.weather.current.feelslike}°F</h3>
            <h3>Sky Condition: {props.weather.current.weather_descriptions}</h3>
            <h3>Visibility: {props.weather.current.visibility} miles </h3>
            <h3>Chance of Rain: {props.weather.current.precip}%</h3>
            <h3>Wind Speed/Direction: {props.weather.current.wind_speed} MPH heading {props.weather.current.wind_dir}</h3>
            <h6>As of: {props.weather.current.observation_time} UTC/GMT</h6>
               
        </div>
    )
}
export default HighLow;