import React, { memo,lazy,Suspense } from 'react'
import "./Allmovies.css"
import { useSelector } from 'react-redux';
import Posterslider from '../Image-Slider/Posterslider';
import Skeletons from '../Skeletons/Skeletons';
import Rowcards  from "../Row-Card/Rowcards"
 
const Allmovies = () => {
    const allMovies = useSelector((state) => {
        return state;
      });
  return (
        <>
        <Posterslider showMovies={allMovies.all}/>
        <div className="popular_movies_container movies_container">
          <h1>POPULAR MOVIES</h1>

         
          {allMovies.popular.length !== 0 ? <Rowcards movies={allMovies.popular} /> : <div className='new_skeletons'><Skeletons/></div>}
            
        </div>
        <div className="upcoming_movie_container movies_container">
          <h1>UPCOMING MOVIES</h1>
          {allMovies.upcoming.length !== 0 ? <Rowcards movies={allMovies.upcoming} /> : <div className='new_skeletons'><Skeletons/></div>}
         
            
        </div>
        <div className="top_rated_movie_container movies_container">
          <h1>TOP-RATED MOVIES</h1>
          {allMovies.topRated.length !== 0 ? <Rowcards movies={allMovies.topRated} />: <div className='new_skeletons'><Skeletons/></div>}
            
        </div>
        <div className="trending_movie_container movies_container">
          <h1>TRENDING MOVIES</h1>
          {allMovies.trending.length !== 0 ? <Rowcards movies={allMovies.trending} /> : <div className='new_skeletons'><Skeletons/></div>}
            
        </div>
        <div className="comedy_movie_container movies_container">
          <h1>COMEDY MOVIES</h1>
          {allMovies.comedy.length !== 0 ? <Rowcards movies={allMovies.comedy} /> : <div className='new_skeletons'><Skeletons/></div>}
            
        </div>
        <div className="action_movie_container movies_container">
          <h1>ACTION MOVIES</h1>
          {allMovies.action.length !== 0 ? <Rowcards movies={allMovies.action} /> : <div className='new_skeletons'><Skeletons/></div>}
            
        </div>
        <div className="action_movie_container movies_container">
          <h1>HORROR MOVIES</h1>
          {allMovies.horror.length !== 0 ? <Rowcards movies={allMovies.horror} /> : <div className='new_skeletons'><Skeletons/></div>}
            
        </div>
        </>
    
  )
}

export default memo(Allmovies)