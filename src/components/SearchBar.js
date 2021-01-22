import React from "react";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
    const handleUpdate = (e) => {
        props.setZip(e.target.value)
    }

    return (
        <div className="search-bar">
            <form onSubmit={props.handleSubmit}>
                <input type="text"
                       placeholder="Enter City/ZIP Code"
                       value={props.zip}
                       onChange={handleUpdate}
                       ></input>
                       <input type="submit"></input>
            </form>     
        </div>
    )
}

export default SearchBar;