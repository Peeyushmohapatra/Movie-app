import React from 'react'
import "./Trending.css"
import { useSelector } from 'react-redux'
import Cards from '../Cards/Cards'
import Posterslider from '../Image-Slider/Posterslider'

const Trending = () => {
    const trending = useSelector((state) => {
        return state.trending
    })
  return (
    <div>
      <Posterslider showMovies={trending} />
        <Cards movies={trending} />
    </div>
  )
}

export default Trending