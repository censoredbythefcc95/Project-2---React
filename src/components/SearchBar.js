import React from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
    return (
        <div>
            <h3>This is the Searchbar Component.</h3>
            <Link to="./weather">
                <div>Link to Weather test</div>
            </Link>
            <Link to="/">
                <div>Link to Main test</div>
            </Link>
            
        </div>
    )
}

export default SearchBar;