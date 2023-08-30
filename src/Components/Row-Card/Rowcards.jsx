import React from 'react'
import "./Rowcards.css"
import { Link } from 'react-router-dom'
import Cards from '../Cards/Cards'


const Rowcards = ({movies}) => {
  return (
    <>
    <div className="popularContainer">
        {movies.map((movie) => {
                return (
                  <Link to={`/moviedetails/${movie.id}`}>
                  <div className="movie_cards1" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${
                        movie && movie.poster_path
                      })`}}>
                    {/* <img
                      src={`https://image.tmdb.org/t/p/original/${
                        movie && movie.poster_path
                      }`}
                      alt=""
                    /> */}
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

export default Rowcards