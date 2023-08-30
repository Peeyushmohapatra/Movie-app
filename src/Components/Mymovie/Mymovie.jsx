import React, { useEffect, useState } from 'react'
import "./Mymovie.css"
import { credits, movieDetails, trailer } from "../../Functions/functions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Button from "react-bootstrap/Button";

const Mymovie = () => {
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(false);
    const videoKey = useSelector((state) => {
      return state.videoKey;
    });
  
    useEffect(() => {
      movieDetails(id, setMovie);
      credits(id, dispatch);
      trailer(id, dispatch);
    }, [dispatch]);
  return (
    <div className="outer-my-movie-container">
        <div className='my-movie-container' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path})`}}>Mymovie</div>
        <div className="movie-data-container1">
            <div className='left-container'>
            <h5>Status: {movie.status}</h5>
            <h5>Status: {movie.release_date}</h5>
            <div className="lang">
              <h5>Languages: </h5>
              {movie.length !== 0 &&
                movie.spoken_languages.map((ele) => {
                  return (
                    <Button variant="outline-primary">
                      {ele.english_name}
                    </Button>
                  );
                })}
            </div>
            <h5>Status: {movie.runtime} Minutes</h5>

            <div className="lang">
              <h5>Genres: </h5>
              {movie.length !== 0 &&
                movie.genres.map((ele) => {
                  return <Button variant="outline-primary">{ele.name}</Button>;
                })}
            </div>
            <h5>
              Rating: {movie.length !== 0 && movie.vote_average.toFixed(0)}{" "}
              <i className="imdbic fa-brands fa-imdb"></i>
            </h5>
            <div className="overview">
              <h5>Description: </h5>
              <p> {movie.overview}</p>
            </div>
            </div>
            <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie && movie.poster_path})`}} className='right-container'>
                {/* <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" className="poster-image" /> */}
                <div className="overlay1"></div>
            </div>
        </div>
    </div>
  )
}

export default Mymovie