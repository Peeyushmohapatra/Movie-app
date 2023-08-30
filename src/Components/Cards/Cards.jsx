import React, { memo } from "react";
import "./Cards.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";



const Cards = ({ movies }) => {
  return (
    <>
      {movies.length ? (
        <>
            <div className="card_container">
            {movies.map((movie) => {
                return (
                  <Link to={`/moviedetails/${movie.id}`}>
                  <div className="imageContainer" id="main_image_container" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${
                        movie && movie.poster_path
                      })`}}>
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
        <div className="skeleton-container">
          <Skeleton
            style={{ borderRadius: " 30px" }}
            width={200}
            height={300}
          />
          <Skeleton
            style={{ borderRadius: "30px" }}
            width={200}
            height={300}
          />
          <Skeleton
            style={{ borderRadius: "30px" }}
            width={200}
            height={300}
          />
          <Skeleton
            style={{ borderRadius: "30px" }}
            width={200}
            height={300}
          />
          <Skeleton
            style={{ borderRadius: "30px" }}
            width={200}
            height={300}
          />
          {/* {<Skeleton count={10} />} */}
        </div>
      )}
    </>
  );
};

export default memo(Cards);
