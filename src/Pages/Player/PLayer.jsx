import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const PLayer = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };

  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at: "",
    type : "",
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDZmMWJiZGFjZGZjMzJiODk1NGEzM2FlZTdmMTQ2MSIsIm5iZiI6MTcyMTk1MzA2Ni42ODQ3ODYsInN1YiI6IjY2YTJlOTgyOTk0NjYzMTFkNDQ2ODIzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qQLrsA7dyyzNkhelDgLX196AE60nNGDESfgM9sM5vUs'
    }
  };
  
  useEffect(()=>{
     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response =>  response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])
  
 

  return (
    <div className='player'>
      
      <img src={back_arrow_icon} alt="" onClick={goToHomePage}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen ></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>


      </div>
    </div>
  )
}

export default PLayer