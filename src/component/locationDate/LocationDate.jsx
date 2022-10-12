import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import './locationDate.css'

const LocationDate = () => {
  return (
    <div>
        <div className="location">
            <h3 className='work_location'>Work Location</h3>
            <h5 className='enter_location'>Enter location</h5>
            <input type="text" className='location_input'/>
            <span className='location_icon'><LocationOnIcon/></span>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198160.90662902096!2d88.19851122112641!3d22.65008315549901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1665560237308!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="date_main">
          <h3 className='date'>Date</h3>
          <p className='date_para'>Select the date when you required the service</p>
          <input type="date" name="Date" id="" className='date_input'/>
        </div>
    </div>
  )
}

export default LocationDate