import React from 'react'
import "./Trending.css"
import { useSelector } from 'react-redux'
import Common from '../Common/Common'
import { Link } from 'react-router-dom'


const Trending = () => {
    const trending = useSelector((state) => {
        return state.trending
    })
  return (
    <div className='trending'>
        <h1 className="header">Trending Movies</h1>
        {trending ? <div className="cardContainer">
        {trending &&
          trending.map((movie) => {
            return (
              <Link to={`/all/${movie.id}/${movie.title}`}>

              <Common movie={movie}/>
            </Link>
            )
          })}
      </div> : null}
    </div>
  )
}

export default Trending