import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { credits, movieDetails, trailer } from "../../Functions/functions";

const Details = () => {
  const [movie, setMovie] = useState([]);
  console.log(movie, "MOVIE");
  const { id } = useParams();
  const dispatch = useDispatch();
  //   const [display, setDisplay] = useState(false);
  const videoKey = useSelector((state) => {
    return state.videoKey;
  });

  useEffect(() => {
    movieDetails(id, setMovie);
    credits(id, dispatch);
    trailer(id, dispatch);
    console.log(movie);
  }, [dispatch]);
  return (
    <div className="outer-detais-container">
      <header>
        <a href="#" className="logo">
          <h3>{movie.original_title}</h3>
        </a>
        <div className="toggle">
          <img src="" alt="" />
        </div>
      </header>
      <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path})`}} className="banner">
        <div className="content">
          <h2>
            Put on a <span>Happy</span> face
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam
            ipsum magni, odit est vel quos veniam ducimus labore repellat?
          </p>
          <a href="#" className="play"><i className="fa-regular fa-circle-play"></i> Watch Trailer</a>
          <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie && movie.poster_path})`}} className="slide"></div>
          <ul className="sci">
            <li><a href="">Facebook</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
