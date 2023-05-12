import React from 'react'
import "./Pupular.css"
import { useSelector } from 'react-redux'
import Common from '../Common/Common'
import { Link } from 'react-router-dom'
import { popular } from '../../functions'


const Pupular = () => {
  const popularMovie = useSelector((state) => {
    return state.popular
  })
  return (
    <div className='popular'>
      <h1 className="header">Popular Movies</h1>
      {popular ? <div className="cardContainer">
        {popularMovie &&
          popularMovie.map((movie) => {
            return (
              <Link to={`/all/${movie.id}/${movie.title}`}>

                <Common movie={movie}/>
              </Link>
            )
          })}
      </div>  : null}
    </div>
  )
}

export default Pupular