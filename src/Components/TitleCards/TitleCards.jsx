import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title,category}) => {

  const cardsRef =useRef();

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scollLeft += event.deltaY;

  
}
useEffect(()=>{
  cardsRef.current.addEventListener('wheel', handleWheel);
},[])

  return (
    <div className='title-cards'>
      <h2>{title?title: "Popular on Netflix "}</h2>
      
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((cards,index)=>{
            return <div className="card" key={index}>
              <img src={cards.image} alt="" />
              <p>{cards.name}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards