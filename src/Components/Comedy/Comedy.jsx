import React, { memo } from 'react'
import "./comedy.css"
import { useSelector } from 'react-redux'
import Posterslider from '../Image-Slider/Posterslider'
import Cards from '../Cards/Cards'
import comedyImg from "../../Logo/Comedy.png"

const Comedy = () => {
    const comedy = useSelector((state) => {
        return state
    })
  return (
        <div className='comedy'>
      <Posterslider showMovies={comedy.comedy}/>
      <h1 className='comedyHeading'>COMEDY MOVIES <img src={comedyImg} alt="" /></h1>
        <Cards movies={comedy.comedy} />
    </div>
    
  )
}

export default memo(Comedy)