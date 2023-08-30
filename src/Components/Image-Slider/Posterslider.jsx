import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Posterslider.css";
import { Link } from "react-router-dom";

const Posterslider = ({showMovies}) => {
  
  return (
    <div className="carousel">
      <Carousel data-bs-theme="dark" interval={5000}>
        {showMovies &&
          showMovies.map((movie) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`https://image.tmdb.org/t/p/original/${
                    movie && movie.backdrop_path
                  }`}
                  alt="First slide"
                />
                <Link to={`/moviedetails/${movie.id}`}>
                <div className="caption">
                  <div className="movieposter_container">
                    <img id="movieposter_container_image" src={`https://image.tmdb.org/t/p/original/${
                    movie && movie.poster_path
                  }`} alt="" />
                  </div>
                  <div className="innercaption">
                  <Carousel.Caption>
                      <h1>{movie.original_title}</h1>
                      <div id="movieDiscription">
                        <h4>{movie.release_date}</h4>
                        <h3>
                          <i className="imdbicon fa-brands fa-imdb"></i>{" "}
                          {movie.vote_average}
                        </h3>
                      </div>
                      <span>{movie.overview}</span>
                    </Carousel.Caption>
                  </div>
                </div>
                </Link>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Posterslider;
