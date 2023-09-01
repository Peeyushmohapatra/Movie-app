import React, { memo } from 'react'
import "./action.css"
import { useSelector } from 'react-redux'
import Posterslider from '../Image-Slider/Posterslider'
import Cards from '../Cards/Cards'
import action from "../../Logo/action-movie.png"

const Action = () => {
    const movie = useSelector((state) => {
        return state
    })
  return (
    <div className='action'>
      <Posterslider showMovies={movie.action}/>
      <h1 className='actionHeading'>ACTION MOVIES</h1>
      <h1 className='actionHeading'> <img src={action} alt="" /></h1>
        <Cards movies={movie.action} />
    </div>
  )
}

export default memo(Action)