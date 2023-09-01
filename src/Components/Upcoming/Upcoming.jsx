import React, { memo } from 'react'
import "./Upcoming.css"
import { useSelector } from 'react-redux'
import Cards from '../Cards/Cards'
import Posterslider from '../Image-Slider/Posterslider'
import upcomingImg from "../../Logo/upcoming-image.png"

const Upcoming = () => {
    const upcoming = useSelector((state) => {
        return state.upcoming
    })
  return (
    <div className='upcoming'>
      <Posterslider showMovies={upcoming} />
      <h1 className='upcomingHeading'>UPCOMING</h1>
      <h1 className='upcomingHeading'> MOVIES <img src={upcomingImg} alt="" /></h1>
        <Cards movies={upcoming} />
    </div>
  )
}

export default memo(Upcoming)