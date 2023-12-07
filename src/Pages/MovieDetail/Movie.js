import { useState, useEffect } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movieList, setMovieList] = useState();
    const { id } = useParams();

    useEffect(() => {
        getData()
        window.scroll(0, 0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then(
            res => res.json()
        ).then(
            data => setMovieList(data)
        )
    }
    return (
        <div>
            <div className="image_1">
                <img src={`https://image.tmdb.org/t/p/original${movieList ? movieList.backdrop_path : ""}`} />
            </div>
            <div>
                <div className="left_content">
                    <img src={`https://image.tmdb.org/t/p/original${movieList ? movieList.poster_path : ""}`} />
                </div>
                <div className="movie_ti">
                    {movieList ? movieList.original_title : ""}
                </div>
                <div className="tagline">
                    {movieList ? movieList.tagline : ""}
                </div>
                <div className="vote">
                    {movieList ? movieList.vote_average : ""} <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="popularity">
                    {movieList ? movieList.popularity : ""} (popularity)
                </div>
                <div className="release_date">
                    Release Date : {movieList ? movieList.release_date : ""}
                </div>
                <div className="status">
                    {movieList ? movieList.status : ""}
                </div>
                <h4 className="h4">Synopsis</h4>
                <div className="overview">
                    <span>{movieList ? movieList.overview : ""}</span>
                </div>
            </div>
        </div>
    )
}

export default Movie;