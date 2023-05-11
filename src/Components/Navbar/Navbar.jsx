import React, { useState } from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
  const [search,setSearch] = useState("");
  const allMovies = useSelector((state) => {
    return state.all
  });
  const searchData = useSelector((state) => {
    return state.searchMovie
  });

  const dispatch = useDispatch()


  function searchMovie(movieName){
    const movie = allMovies.filter((movies,idx,allMovies) => {
      // array.indexOf(value) === index
      // console.log(movies.title,movieName);
      return (movies.title.toUpperCase()).includes(movieName.toUpperCase())
    })
    // console.log(movie,"Navbar");

    const filterMovie = movie.filter((value,idx,movie) => {
      return movie.indexOf(value)
    })

    // console.log(filterMovie);

    dispatch({
      type:"search-data",
      data:movie
    })

    dispatch({
      type:"movie-name",
      data:search
    })

   
    // console.log(myMovie);
    
  }

  return (
    <div className='navbar'>
        <div className="logo"></div>
        <div className="search">
            <input onChange={(e) => {
              setSearch(e.target.value)
            }} placeholder='Search !!!' type="text" />
            <Link className='searchButton' to="/search"> 
            <button onClick={() => {
              searchMovie(search)
            }}>Search</button>
            </Link>
        </div>
        <div className="rest">
          <NavLink to="/all"><li>All</li></NavLink>
          <NavLink to="/popular"><li>Popular</li></NavLink>
          <NavLink to="/toprated"><li>Top-Rated</li></NavLink>
          <NavLink to="/upcoming"><li>Upcoming</li></NavLink>
          <NavLink to="/trending"><li>Trending</li></NavLink>
        </div>
    </div>
  )
}

export default Navbar