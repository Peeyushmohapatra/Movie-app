import React, { memo } from 'react'
import "./Popular.css"
import Cards from '../Cards/Cards'
import { useSelector } from 'react-redux'
import Posterslider from '../Image-Slider/Posterslider'
import popularImage from "../../Logo/Popular-movies.png"
const Popular = () => {
    const popular = useSelector((state) => {
        return state.popular
    })
  return (
    <div className='popular'>
      <Posterslider showMovies={popular}/>
      <h1 className='popularHeading'>POPULAR MOVIES <img src={popularImage} alt="" /></h1>
        <Cards movies={popular} />
    </div>
  )
}

export default memo(Popular)