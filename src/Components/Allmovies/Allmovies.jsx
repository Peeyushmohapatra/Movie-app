import React from "react";
import "./Allmovies.css";
import { useSelector } from "react-redux";
import Common from "../Common/Common";
import { Link } from "react-router-dom";


const Allmovies = () => {
  const movies = useSelector((state) => {
    return state.all;
  });
  return (
    <div className="allmovieContainer">
      <h1>All Movies</h1>
      
      <div className="cardContainer">
        {movies &&
          movies.map((movie) => {
            return (
              <Link to={`/all/${movie.id}/${movie.title}`}>
                <Common movie={movie}/>
                </Link>
                
            )
          })}
      </div>
    </div>
  );
};

export default Allmovies;
