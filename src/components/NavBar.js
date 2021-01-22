import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
        <div className="nav-bar">
            <h3>SunorRain</h3>
            <ul className="container">
                <Link to="/">
                <li><a href="/">Home</a></li>
                </Link>
                <Link to="/about">
                <li><a href="/about">About This App</a></li>
                </Link>
            </ul>
        </div>
        </div>
    )
}

export default NavBar;