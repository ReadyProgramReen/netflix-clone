import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title,category}) => {

  const [apiData, setapiData] =useState([])

  const cardsRef =useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDZmMWJiZGFjZGZjMzJiODk1NGEzM2FlZTdmMTQ2MSIsIm5iZiI6MTcyMTk1MzA2Ni42ODQ3ODYsInN1YiI6IjY2YTJlOTgyOTk0NjYzMTFkNDQ2ODIzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qQLrsA7dyyzNkhelDgLX196AE60nNGDESfgM9sM5vUs'
    }
  };
  
  
const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scollLeft += event.deltaY;

  
}
useEffect(()=>{

  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setapiData(response.results))
    .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
},[])

  return (
    <div className='title-cards'>
      <h2>{title?title: "Popular on Netflix "}</h2>
      
      <div className="card-list" ref={cardsRef}>
        {apiData.map((cards,index)=>{
            return <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+cards.backdrop_path} alt="" />
              <p>{cards.original_title}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards