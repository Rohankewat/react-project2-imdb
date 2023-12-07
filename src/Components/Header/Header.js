import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header_icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" ></img></Link>
                <Link to="movies/popular" style={{ textDecoration: "none" }}><span className="span1">Popular</span></Link>
                <Link to="movies/top_rated" style={{ textDecoration: "none" }}><span className="span1">Top Rated</span></Link>
                <Link to="movies/upcoming" style={{ textDecoration: "none" }}><span className="span1">Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header;