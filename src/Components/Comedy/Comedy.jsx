import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import Posterslider from '../Image-Slider/Posterslider'
import Cards from '../Cards/Cards'

const Comedy = () => {
    const comedy = useSelector((state) => {
        return state
    })
  return (
        <div className='comedy'>
      <Posterslider showMovies={comedy.comedy}/>
        <Cards movies={comedy.comedy} />
    </div>
    
  )
}

export default memo(Comedy)