import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const hero = () => {
  return (
    <div className='hero container'>
<div className="hero-text">
    <h1>We Ensure Better Eduation For a Better World</h1>
    <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p> 
       <button className='btn'>EXplore More <img src={dark_arrow} alt="" /></button>
</div>
    </div>
  )
}

export default hero