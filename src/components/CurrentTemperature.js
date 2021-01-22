import React from "react";

const CurrentTemperature = (props) => {
    return (
        <div>
            
            <h3> {props.weather.current.temperature} °F</h3>
        </div>
    )
}

export default CurrentTemperature;