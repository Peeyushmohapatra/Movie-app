import React, { memo, useEffect, useState } from "react";
import "./Moviedetail.css";
import { allMoviedetails } from "../../Functions/functions";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    allMoviedetails(id,dispatch,setMovie)
  }, [dispatch,id]);

  return (
    <div className="div">
      <div className="movieImageContainer">
        <img
          src= {movie.backdrop_path === null ? "https://www.shutterstock.com/shutterstock/videos/1087269692/thumb/5.jpg?ip=x480" : `https://image.tmdb.org/t/p/original/${
            movie && movie.backdrop_path
          }`}
          alt=""
        />
        <div className="overlay">
          
          <h1 className="stylist_movie_heading"
            style={{
              backgroundImage:`url(https://image.tmdb.org/t/p/original/${
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
                src={movie.poster_path == null ? "https://thumbs.dreamstime.com/b/no-image-available-icon-isolated-dark-background-simple-vector-logo-no-image-available-icon-isolated-dark-background-275079095.jpg" : `https://image.tmdb.org/t/p/original/${
                  movie && movie.poster_path
                }`}
                alt=""
              />
            </div>
          </div>
          <div className="movie-data-container">
            <h5><span>Status:</span> <span id="span_details">{movie.status}</span></h5>
            <h5><span>Release Date:</span> <span id="span_details">{movie.release_date}</span></h5>
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
            <h5 className="highlight"><span>Runtime:</span> <span id="span_details">{movie.runtime} Minutes</span> </h5>

            <div className="lang">
              <h5>Genres: </h5>
              {movie.length !== 0 &&
                movie.genres.map((ele) => {
                  return <Button variant="outline-primary">{ele.name}</Button>;
                })}
            </div>
            <h5 className="highlight">
              <span>Rating:</span> <span id="span_details">{movie.length !== 0 && movie.vote_average.toFixed(0)}</span>{" "}
              <i className="imdbic fa-brands fa-imdb"></i>
            </h5>
            <div className="overview">
              <h5>Description: </h5>
              <p>{movie.overview}</p>
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
              {videoKey  ? <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
               : <h1>Data Not Found</h1>}
              </div>
            </div>
          </div>
        </div>
        <div className="cast-container">
          <h1 className="cast_heading">MOVIE <i>CAST</i></h1>
          <br />
          <Cast />
        </div>
      </div>
    </div>
  );
};

export default memo(Moviedetail);
