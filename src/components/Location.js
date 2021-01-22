import React from "react";

const Location = (props) => {
    return (
        <div>
            <h3>{props.weather.location.name}, {props.weather.location.region} </h3>
        </div>
    )
}

export default Location;