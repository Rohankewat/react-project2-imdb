import React from "react";
import "./Home.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MovieList from "../../Components/MovieList/MovieList";

const Home = () => {

    const [poplarMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then(
            res => res.json()
        ).then(
            data => setPopularMovies(data.results)
        )
    }, [])
    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={true}
                >

                    {
                        poplarMovies.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                                <div className="image_icon">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="movie_title">
                                    <div>
                                        {movie ? movie.original_title : ""}
                                    </div>
                                </div>
                                <div className="movie_date">
                                    <div>
                                        {movie ? movie.release_date : ""}
                                    </div>
                                </div>
                                <div className="rating">
                                    <div>
                                        {movie ? movie.vote_average : ""}
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="discription">
                                    <div>
                                        <span>{movie ? movie.overview : ""}</span>
                                    </div>
                                </div>

                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home;