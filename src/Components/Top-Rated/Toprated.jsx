import React, { memo } from 'react'
import "./Toprated.css"
import Cards from '../Cards/Cards'
import { useSelector } from 'react-redux'
import Posterslider from '../Image-Slider/Posterslider'
import topratedImg from "../../Logo/toprated-image.png"

const Toprated = () => {
    const topRated = useSelector((state) => {
        return state.topRated
    })
  return (
    <div className='toprated'>
        <Posterslider showMovies={topRated} />
        <h1 className='topratedHeading'>TOP RATED MOVIES</h1>
        <h1 className='topratedHeading'><img src={topratedImg} alt="" /></h1>
        <Cards movies={topRated}/>
    </div>
  )
}

export default memo(Toprated)