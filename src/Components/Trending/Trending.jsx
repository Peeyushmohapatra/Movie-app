import React, { memo } from 'react'
import "./Trending.css"
import { useSelector } from 'react-redux'
import Cards from '../Cards/Cards'
import Posterslider from '../Image-Slider/Posterslider'
import trendingImg from "../../Logo/trending-image.png"

const Trending = () => {
    const trending = useSelector((state) => {
        return state.trending
    })
  return (
    <div className='trending_comp'>
      <Posterslider showMovies={trending} />
      <h1 className='trendingHeading'>TRENDING MOVIES &nbsp;  <img src={trendingImg} alt="" /></h1>
        <Cards movies={trending} />
    </div>
  )
}

export default memo(Trending)