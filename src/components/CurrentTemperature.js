import React from "react";

const CurrentTemperature = (props) => {
    return (
        <div>
            <h3> Current Temperature: {props.weather.current.temperature} F</h3>
        </div>
    )
}

export default CurrentTemperature;