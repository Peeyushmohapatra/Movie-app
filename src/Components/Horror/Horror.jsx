import React, { memo } from 'react'
import "./horror.css"
import Posterslider from '../Image-Slider/Posterslider'
import Cards from '../Cards/Cards'
import { useSelector } from 'react-redux'
import horror from "../../Logo/horror.png"

const Horror = () => {
    const movies = useSelector((state) => {
        return state
    })
  return (
    <div className='horror'>
      <Posterslider showMovies={movies.horror}/>
      <h1 className='horrorHeading'>HORROW MOVIES <img src={horror} alt="" /></h1>
        <Cards movies={movies.horror} />
    </div>
  )
}

export default memo(Horror)