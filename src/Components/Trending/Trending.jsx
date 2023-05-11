import React from 'react'
import { useSelector } from 'react-redux'
import Common from '../Common/Common'
import { Link } from 'react-router-dom'


const Trending = () => {
    const trending = useSelector((state) => {
        return state.trending
    })
  return (
    <div className='trending'>
        <h1>Trending Movies</h1>
        <div className="cardContainer">
        {trending &&
          trending.map((movie) => {
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

export default Trending