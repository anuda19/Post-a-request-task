import React from 'react'
import img from '../../Assets/image.svg'
import './banner.css'

const Banner = () => {
  return (
    <div className="header">
      <div className="header_section">
        <div className="header_left">
          <h1>Post a <span className='request'>request</span></h1>
          <p>We made it budget friendly, easy & reliable for you</p>
        </div>
        <div className="header_right">
          <img src={img} alt="" />
        </div>
        </div>
      </div>
  )
}

export default Banner