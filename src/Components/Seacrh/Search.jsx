import React from 'react'
import "./Search.css"
import { useSelector } from 'react-redux'
import Common from '../Common/Common'
import { Link } from 'react-router-dom'

const Search = () => {
    const searchData = useSelector((state) => {
        return state.searchMovie
    });


    // array.indexOf(value) === index
    



    const movieName = useSelector((state) => {
        return state.movieName
    })
  return (
    <div className='searchDiv'>
        {searchData ? <>
        
            <div className="searchingFor">
                <h1>Here are few results for "{movieName}"</h1>
                
            </div>
            <div className="searchContainer">

            {searchData && searchData.map((movie) => {
                return (
                    <Link to={`/all/${movie.id}/${movie.title}`}>
                        <Common movie={movie} />
                    </Link>
                )
            })}
            </div>
        </> : <>Not</>}
    </div>
  )
}

export default Search