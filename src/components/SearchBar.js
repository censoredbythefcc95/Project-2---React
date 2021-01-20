import React from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <h3>This is the Searchbar Component.</h3>

            <Link to="/weather">
                <button>Search Results</button>
            </Link>

            <Link to="/">
                <button>Search Main</button>
            </Link>
            
        </div>
    )
}

export default SearchBar;