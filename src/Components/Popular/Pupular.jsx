import React from 'react'
import "./Pupular.css"
import { useSelector } from 'react-redux'
import Common from '../Common/Common'
import { Link } from 'react-router-dom'


const Pupular = () => {
  const popularMovie = useSelector((state) => {
    return state.popular
  })
  return (
    <div className='popular'>
      <h1>Popular Movies</h1>
      <div className="cardContainer">
        {popularMovie &&
          popularMovie.map((movie) => {
            return (
              <Link to={`/all/${movie.id}/${movie.title}`}>

                <Common movie={movie}/>
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default Pupular