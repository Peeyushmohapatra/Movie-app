import React from 'react'

const Common = ({movie}) => {
  return (
    <div className="allmovieCard">
                    <div className="movieData">
                        <div className="titleContainer1">
                            <h3>{movie.title}</h3>
                        </div>
                        <div className="dataContainer">
                            <div className="releaseDate">
                            {movie.release_date}
                            <i className="calender fa-regular fa-calendar-days"></i>
                            </div>
                            <div className="imdb">
                                {movie.vote_average}
                                <i className="rating fa-brands fa-imdb"></i>
                            </div>
                        </div>
                    </div>
                    <img
                    className="mainPosterImage"
                    src={`https://image.tmdb.org/t/p/original/${
                      movie && movie.poster_path
                    }`}
                    alt=""
                  />
                  
                </div>
  )
}

export default Common