import React, { memo } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import Skeletons from "../Skeletons/Skeletons";



const Cards = ({ movies }) => {
  return (
    <>
      {movies.length !== 0 ? (
        <>
            <div className="card_container">
            {movies.map((movie) => {
                return (
                  <Link onClick={() => {
                  }}  to={`/moviedetails/${movie.id}`}>
                  <div className="imageContainer" id="main_image_container" style={{backgroundImage: movie.poster_path == null ?  "url(https://thumbs.dreamstime.com/b/no-image-available-icon-isolated-dark-background-simple-vector-logo-no-image-available-icon-isolated-dark-background-275079095.jpg)" : 
                  
                  `url(https://image.tmdb.org/t/p/original/${
                        movie && movie.poster_path
                      })`
                } 
                
                }>
                    {/* <img
                      src={`https://image.tmdb.org/t/p/original/${
                        movie && movie.poster_path
                      }`}
                      alt=""
                    /> */}
                    <div className="trial">
                      <h6>{movie.original_title}</h6>
                      <div className="ratingContainer">
                        <span>
                          {movie.release_date}{" "}
                          <i className="calendar fa-solid fa-calendar"></i>
                        </span>
                        <span>
                          {" "}
                          {movie.vote_average}{" "}
                          <i className="imdbicon fa-brands fa-imdb"></i>
                        </span>
                      </div>
                    </div>
                  </div>
              </Link>
                );
              })}
            </div>
        </>
      ) : (
        <Skeletons/>
      )}
    </>
  );
};

export default memo(Cards);
