import React, { useEffect, useState } from "react";
import "./Moviedetail.css";
import Image from "react-bootstrap/Image";
import { credits, movieDetails, trailer } from "../../Functions/functions";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Cast from "../Cast/Cast";
import CloseButton from "react-bootstrap/CloseButton";

const Moviedetail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const videoKey = useSelector((state) => {
    return state.videoKey;
  });

  const navigate = useNavigate()
  useEffect(() => {
    movieDetails(id, setMovie);
    credits(id, dispatch);
    trailer(id, dispatch,navigate);
  }, [dispatch]);

  return (
    <div className="div">
      <div className="movieImageContainer">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie && movie.backdrop_path
          }`}
          alt=""
        />
        <div className="overlay">
          <h1
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                movie && movie.backdrop_path
              })`,
            }}
          >
            {movie.original_title}
          </h1>
        </div>
      </div>
      <div className="movie-details-container">
        <div className="upper-container">
          <div className="movie-poster-container">
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  movie && movie.poster_path
                }`}
                alt=""
              />
            </div>
          </div>
          <div className="movie-data-container">
            {/* <h1>{movie.original_title}</h1> */}
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
            <h5>Runtime: {movie.runtime} Minutes</h5>

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
            <div>
              <Button
                onClick={() => {
                  setDisplay(true);
                }}
                variant="outline-info"
              >
                <i className="fa-solid fa-play"></i> Movie Trailer
              </Button>{" "}
            </div>
          </div>
          <div style={{display:(display === true ? "flex" : "none")}} className='videoContainer'>
            <div className="upperContainer">
            <CloseButton
                  variant="white"
                  onClick={() => {
                    setDisplay(false);
                  }}
                />
            </div>
            <div className="youtubeContainer">
              <div className="youtube">
              {videoKey  ? <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               : <h1>Data Not Found</h1>}
              </div>
            </div>
          </div>
        </div>
        <div className="cast-container">
          <Cast />
        </div>
      </div>
    </div>
  );
};

export default Moviedetail;
