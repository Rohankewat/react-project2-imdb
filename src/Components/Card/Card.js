import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./Card.css"

const Card = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [])
    return (
        <div>
            {
                isLoading
                    ?
                    <div className="cards">
                        <SkeletonTheme highlightColor="#444">
                            <Skeleton duration={2} color="black" width={100} height={160} />
                        </SkeletonTheme>
                    </div>
                    :
                    <Link to={`/movie/${movie.id}`} style={{ color: "white" }}>
                        <div className="cards">
                            <div className="card_image">
                                <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                            </div>
                            <div className="card_overlay">
                                <div className="movie_tit">
                                    {movie ? movie.original_title : ""}
                                </div>
                                <div className="movie_release">
                                    {movie ? movie.release_date : ""}
                                </div>
                                <div className="movie_vote">
                                    {movie ? movie.vote_count : ""}<i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <div className="movie_discrip">
                                    {movie ? movie.overview.slice(0, 110) + "....." : ""}
                                </div>
                            </div>
                        </div>
                    </Link >
            }
        </div >
    )
}

export default Card;