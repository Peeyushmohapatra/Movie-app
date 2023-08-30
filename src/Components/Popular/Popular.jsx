import React from 'react'
import "./Popular.css"
import Cards from '../Cards/Cards'
import { useSelector } from 'react-redux'
import Posterslider from '../Image-Slider/Posterslider'

const Popular = () => {
    const popular = useSelector((state) => {
        return state.popular
    })
  return (
    <div className='popular'>
      <Posterslider showMovies={popular}/>
        <Cards movies={popular} />
    </div>
  )
}

export default Popular