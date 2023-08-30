import React from 'react'
import Posterslider from '../Image-Slider/Posterslider'
import Cards from '../Cards/Cards'
import { useSelector } from 'react-redux'

const Horror = () => {
    const movies = useSelector((state) => {
        return state
    })
  return (
    <div className='comedy'>
      <Posterslider showMovies={movies.horror}/>
        <Cards movies={movies.horror} />
    </div>
  )
}

export default Horror