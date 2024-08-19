import React from 'react'
import './Review.css'
import Data from './Data'

const Review = () => {
  return (
    <div className='Review'>
      <div className='top'>
        <p className='RRR'>
        Reviews
        </p>
        <p className='Fromy'>From you</p>
        <button className='BBB'>+ Give Review</button>
      </div>
      <div className='imggggg'>
        <img src='/image/Group 51.png' alt='img' className='IIIMMM'/>
      </div>
      <div className='slider'>
        {/* <Data /> */}
      </div>
    </div>
  )
}

export default Review
