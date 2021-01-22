import React from "react";

const About = () => {
    return (
    <div className="about">
        <h3>About this Application</h3>
            <p>This application allows you to check live weather in any area
                of the United States! All you have to do is enter your ZIP Code
                (5 digits only) and this application will return live weather data such as:
            </p>
                <ul>
                    <li>Current Temperature</li>
                    <li>Feels like</li>
                    <li>Sky Condition</li>
                    <li>Visibility</li>
                    <li>Chance of Rain</li>
                    <li>Wind Speed and Direction</li>
                </ul>
    </div>
    )
}
export default About;