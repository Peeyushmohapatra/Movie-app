import { useEffect } from "react";
import "./App.css";
import Navigationbar from "./Components/Navigationbar/Navigationbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import {allFunctions} from "./Functions/functions";
import {Routes,Route} from "react-router-dom"
import Allmovies from "./Components/Allmovies/Allmovies";
import Popular from "./Components/Popular/Popular";
import Toprated from "./Components/Top-Rated/Toprated";
import Upcoming from "./Components/Upcoming/Upcoming";
import Trending from "./Components/Trending/Trending";
import Moviedetail from "./Components/Moviedetail/Moviedetail";
import Search from "./Components/Search/Search";
import Comedy from "./Components/Comedy/Comedy";
import Action from "./Components/Action/Action";
import Horror from "./Components/Horror/Horror";
import Footer from "./Components/Footer/Footer";




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    allFunctions(dispatch)
  }, [dispatch]);
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
      <Footer/>
    </>
  );
}

export default App;
