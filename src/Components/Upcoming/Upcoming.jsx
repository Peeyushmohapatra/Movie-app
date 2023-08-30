import React from 'react'
import "./Upcoming.css"
import { useSelector } from 'react-redux'
import Cards from '../Cards/Cards'
import Posterslider from '../Image-Slider/Posterslider'

const Upcoming = () => {
    const upcoming = useSelector((state) => {
        return state.upcoming
    })
  return (
    <div>
      <Posterslider showMovies={upcoming} />
        <Cards movies={upcoming} />
    </div>
  )
}

export default Upcoming