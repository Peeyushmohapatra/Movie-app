import { useEffect, useState } from "react";
import "./App.css";
import { popular, topRated, trending, upComing } from "./functions";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Allmovies from "./Components/Allmovies/Allmovies";
import Pupular from "./Components/Popular/Pupular";
import Toprated from "./Components/Toprated/Toprated";
import Upcoming from "./Components/Upcoming/Upcoming";
import {Route,Routes} from "react-router-dom"
import Moviedetail from "./Components/Moviedetail/Moviedetail";
import Trending from "./Components/Trending/Trending";
import Search from "./Components/Seacrh/Search";



function App() {

  const data = useSelector((state) => {
    return state
  })

  const dispatch = useDispatch()
  useEffect(() => {
   if(data.all.length === 0 && data.popular.length === 0 && data.upcoming.length === 0 && data.top_rated.length === 0 ){
    popular(dispatch)
   topRated(dispatch)
   upComing(dispatch)
   trending(dispatch)
   }
  }, [])
  
  return <div className="App">

      <Navbar/>
    <Routes>

    <Route path="/" element={<><Home/><Allmovies/></>} />
    <Route path="/all" element={<><Home/><Allmovies/></>} />
    <Route path="/popular" element={<><Home/><Pupular/></>} />
    <Route path="/toprated" element={<><Home/><Toprated/></>} />
    <Route path="/upcoming" element={<><Home/><Upcoming/></>} />
    <Route path="/trending" element={<><Home/><Trending/></>} />
    <Route path="/all/:id/:name" element={<Moviedetail/>} />
    <Route path="/search" element={<Search/>} />

    </Routes>
    
  
  </div>;
}

export default App;
