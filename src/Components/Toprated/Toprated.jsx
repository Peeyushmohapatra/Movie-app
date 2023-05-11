import React, { useState } from 'react'
import "./Toprated.css"
import { useSelector } from 'react-redux'
import Common from '../Common/Common'
import { Link } from 'react-router-dom'


const Toprated = () => {
    const topRated = useSelector((state) => {
        return state.top_rated
    })
  return (
    <div className='toprated'>
        <h1>Top-Rated Movies</h1>
        <div className="cardContainer">
        {topRated &&
          topRated.map((movie) => {
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

export default Toprated