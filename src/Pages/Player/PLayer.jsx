import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const PLayer = () => {
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width="90%" height="90%" src="https://www.youtube.com/embed/iz_SJ5TpLJ0&t=3187s"
      title='trailer' frameBorder='0' allowFullScreen ></iframe>

      <div className="player-info">
        <p>Publish Date</p>
        <p>Name</p>
        <p>Type</p>


      </div>
    </div>
  )
}

export default PLayer