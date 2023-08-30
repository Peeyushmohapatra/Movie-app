import React from 'react'
import { useSelector } from 'react-redux'
import Posterslider from '../Image-Slider/Posterslider'
import Cards from '../Cards/Cards'

const Action = () => {
    const movie = useSelector((state) => {
        return state
    })
  return (
    <div className='action'>
      <Posterslider showMovies={movie.action}/>
        <Cards movies={movie.action} />
    </div>
  )
}

export default Action