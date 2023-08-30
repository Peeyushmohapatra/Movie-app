import React from 'react'
import "./Toprated.css"
import Cards from '../Cards/Cards'
import { useSelector } from 'react-redux'
import Posterslider from '../Image-Slider/Posterslider'

const Toprated = () => {
    const topRated = useSelector((state) => {
        return state.topRated
    })
  return (
    <div>
        <Posterslider showMovies={topRated} />
        <Cards movies={topRated}/>
    </div>
  )
}

export default Toprated