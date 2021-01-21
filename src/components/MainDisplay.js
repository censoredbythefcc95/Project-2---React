import React from "react";
//Importing child components
import Location from "./Location";
import CurrentTemperature from "./CurrentTemperature";
import HighLow from "./HighLow";

const MainDisplay = () => {
    return (
        <div className="MainDisplay">
            <h3>This is the Main Display Component</h3>
            <Location />
            <CurrentTemperature />
            <HighLow />
            <h3>child components test</h3>
        </div>
    )
}

export default MainDisplay;