import React from 'react'
import "./Search.css"
import Cards from '../Cards/Cards'
import { useSelector } from 'react-redux'

const Search = () => {
    const movie = useSelector((state) => {
        return state.search
    })
  return (
    <div>
        {movie.length !== 0 ? <Cards movies={movie}/> : <h1>No Data Found !!</h1>}
    </div>
  )
}

export default Search