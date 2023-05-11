import React, { useEffect, useState } from 'react'
import "./Moviedetail.css"
import { useParams } from 'react-router-dom'
import { credits, trailer } from '../../functions'
import { useDispatch, useSelector } from 'react-redux'

const Moviedetail = () => {

  const [movie,setMovie] = useState([])
  const [videoDiv,setVideodiv] = useState(false)
  const {id} = useParams()
  const {name} = useParams()
  const dispatch = useDispatch()

  const data = useSelector((state => {
    return state
  }));
  const key = useSelector((state => {
    return state.key
  }));



  async function findMovie(id){
    const api = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`);
    const response = await api.text();
    const jsonData = JSON.parse(response);
    setMovie(jsonData)
  }

  useEffect(() => {
    credits(id,dispatch)
    trailer(id,name,dispatch)
    findMovie(id)
  },[])

  return (
    <div className='moviedetail'>
      {movie.length !==0 && <>
      
      <div className="moviePoster">
        <img className='moviedetailImage' src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt=""/>
        <div className="innermoviePoster"></div>
        
      </div>

      <div className="finalTrial">
          <div className="trial">
          <img
          src={`https://image.tmdb.org/t/p/original/${
            movie && movie.poster_path
          }`}
        />
          </div>

          <div className="movieFullDetails">
            <h2 className="movieTitle">{movie && movie.title}</h2>
            <p>
              Status: <span>{movie && movie.status}</span>
            </p>
            <p>
              Release Date: <span>{movie && movie.release_date}</span>{" "}
            </p>
            <p>
              RumTime: <span> {movie && movie.runtime} min</span>{" "}
            </p>

            <p className="languages">
              Languages:
              {movie.length !==0 &&
                movie.spoken_languages.map((ele) => {
                  return <>{<span>{`${ele.english_name} `}</span>}</>;
                })}
            </p>
            <p className="languages">
              Genres:
              {movie &&
                movie.genres.map((ele) => {
                  return <>{<span>{`${ele.name} `}</span>}</>;
                })}
            </p>

            <p>
              Rating: <span>{movie && movie.vote_average.toFixed(1)}</span>{" "}<i className="rating fa-brands fa-imdb"></i>
            </p>
            <p>
              Description: <span>{movie && movie.overview}</span>
            </p>
            <button onClick={() => {
              setVideodiv(true)
            }} className='trailer'><i className="fa-solid fa-play"></i> Trailer</button>
          </div>
        </div>


        <div className="castDetails">
          {data.cast && data.cast.map((cast) => {
            return (
              
              <div className="cast">
                <img src={`https://image.tmdb.org/t/p/original/${cast && cast.profile_path}`} alt="" />
                <p>{cast.original_name}</p>
                <p>{cast.character}</p>
                <p>{(cast.gender === 1 ? "Female" : "Male")}</p>
              </div>
            )
              
            
          })}
          
        </div>

          <div style={{display:(videoDiv === true ? "flex" : "none")}} className='videoContainer'>
            <div className="upperContainer">
              <button onClick={() => {
                setVideodiv(false)
              }}><i className="cross fa-solid fa-xmark"></i></button>
            </div>
            <div className="youtubeContainer">
              <div className="youtube">
              {key != undefined ? <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               : <h1>Data Not Found</h1>}
              </div>
            </div>
          </div>
      </>
      }
      
    </div>
  )
}

export default Moviedetail













