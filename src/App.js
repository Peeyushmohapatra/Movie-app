import { useEffect } from "react";
import "./App.css";
import Posterslider from "./Components/Image-Slider/Posterslider";
import Navigationbar from "./Components/Navigationbar/Navigationbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { action, comedy, horror, popular, topRated, trending, upComing } from "./Functions/functions";
import {Routes,Route} from "react-router-dom"
import Allmovies from "./Components/Allmovies/Allmovies";
import Popular from "./Components/Popular/Popular";
import Toprated from "./Components/Top-Rated/Toprated";
import Upcoming from "./Components/Upcoming/Upcoming";
import Trending from "./Components/Trending/Trending";
// import Moviedetail from "./Components/Moviedetail/Moviedetail";
// import Details from "./Components/Moredetails/Details"
import Moviedetail from "./Components/Moviedetail/Moviedetail";
import Mymovie from "./Components/Mymovie/Mymovie";
import Search from "./Components/Search/Search";
import Comedy from "./Components/Comedy/Comedy";
import Action from "./Components/Action/Action";
import Horror from "./Components/Horror/Horror";




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    popular(dispatch);
    topRated(dispatch);
    upComing(dispatch);
    trending(dispatch);
    comedy(dispatch);
    action(dispatch)
    horror(dispatch)
  }, []);
  return (
    <>
      <Navigationbar/> 
      <div className="App">
        <Routes>
          <Route path="/" element={<><Allmovies/></>}/>
          <Route path="/home" element={<><Allmovies/></>}/>
          <Route path="/popular" element={<Popular/>} />
          <Route path="/top-rated" element={<Toprated/>} />
          <Route path="/upcoming" element={<Upcoming/>} />
          <Route path="/comedy" element={<Comedy/>} />
          <Route path="/action" element={<Action/>} />
          <Route path="/trending" element={<Trending/>} />
          <Route path="/horror" element={<Horror/>} />
          <Route path="/moviedetails/:id" element={<Moviedetail/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
