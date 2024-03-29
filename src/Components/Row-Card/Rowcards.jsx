import React, { memo } from 'react'
import "./Rowcards.css"
import { Link } from 'react-router-dom'


const Rowcards = ({movies}) => {
  return (
    <>
    <div className="popularContainer">
        {movies.map((movie) => {
                return (
                  <Link to={`/moviedetails/${movie.id}`}>
                  <div className="movie_cards1" style={{backgroundImage: movie.poster_path == null ?  "url(https://thumbs.dreamstime.com/b/no-image-available-icon-isolated-dark-background-simple-vector-logo-no-image-available-icon-isolated-dark-background-275079095.jpg)" :`url(https://image.tmdb.org/t/p/original/${
                        movie && movie.poster_path
                      })`}}>
                    <div className="trial1">
                      <h6>{movie.original_title}</h6>
                      <div className="ratingContainer1">
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
  )
}

export default memo(Rowcards)