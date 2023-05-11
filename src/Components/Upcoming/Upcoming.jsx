import React from 'react'
import "./Upcoming.css"
import { useSelector } from 'react-redux'
import Common from '../Common/Common'
import { Link } from 'react-router-dom'


const Upcoming = () => {


    const upcoming = useSelector((state) => {
        return state.upcoming
    })
  return (
    <div className='upcoming'>
        <h1>Upcoming Movies</h1>
        <div className="cardContainer">
        {upcoming &&
          upcoming.map((movie) => {
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

export default Upcoming