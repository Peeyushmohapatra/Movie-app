import React from 'react'
import "./Home.css"
import {Carousel} from "react-responsive-carousel"
import { useSelector } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';


const Home = () => {

    const all = useSelector((state) => {
        return state.popular
    })
    // console.log(all);
  return (
    <div className="home">
    <div className="poster">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={3}
        showStatus={false}
        showThumbs={false}
        >
        {all.map((ele) => {
          return (
            <>
            <Link to={`/all/${ele.id}/${ele.title}`}>
            
                <div className="posterImage">
                  <img
                    className="mainPosterImage"
                    src={`https://image.tmdb.org/t/p/original/${
                      ele && ele.backdrop_path
                    }`}
                    alt=""
                  />
                </div>
                <div className="posterImage_overlay">
                  <div className="posterImage_title">
                    {ele && ele.original_title}
                  </div>
                  <div className="posterImage_releasingDate_rating">
                    {ele && ele.release_date}
                    <span>{ele && ele.vote_average}</span>
                  </div>
                  <div className="posterImageDescription">
                    {ele && ele.overview}
                  </div>
                </div>
            </Link>
            </>
          );
        })}
      </Carousel>
    </div>
  </div>
  )
}

export default Home