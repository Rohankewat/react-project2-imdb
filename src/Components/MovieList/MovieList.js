import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import "./MovieList.css"

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);

    const { type } = useParams();

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        getData();
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then(
            res => res.json()
        ).then(
            data => setMovieList(data.results)
        )
    }
    return (
        <div className="movie_cards">
            <h2 className="title_size">{(type ? type : "popular").toUpperCase()}</h2>
            <div className="card_list">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;