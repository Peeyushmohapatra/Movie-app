import React, { memo } from 'react'
import "./Search.css"
import Cards from '../Cards/Cards'
import { useSelector } from 'react-redux'

const Search = () => {
    const movie = useSelector((state) => {
        return state.search
    })
    const searchFor = useSelector((state) => {
        return state.searchFor
    })
    // console.log(searchFor);
  return (
    <div className='search'>
        {movie.length !== 0 && <h1 id='no_data_found'>Result For "<i>{searchFor}</i>"</h1>}
        {movie.length !== 0 ? <Cards movies={movie}/> : <h1 id='no_data_found'>No Data Found For !! {searchFor}</h1>}
    </div>
  )
}

export default memo(Search)