import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer_main'>
        <div className="group">
            <h1 className="gigs">
                Non-remote Gigs <span className='simple'>Simplified</span>
            </h1>
            <p className='gigs_para'>Get the best outdoor gig professionals in your city, we made it budget friendly, easy & reliable</p>
            <div className="social_icon">
            <span ><FacebookIcon/></span>
            <span><YouTubeIcon/></span>
            <span ><WhatsAppIcon/></span>
            </div>
            <h1 className='started'>Get Started</h1>
        </div>
        <div className="vendor">
        <button className='hire_vendor'><span className='hire_btn_text'>Hire a Vendor</span></button>
        <button className='register_vendor'><span className='register_btn_text'>Register as a Vendor</span></button>
        </div>
        <div className="newsletter">
            <h2 className='newsletter_title'>Newsletter</h2>
            <p className="news_para">
                Subscribe to our monthly newsletter
            </p>
            <input type="text" placeholder='Enter your email here' className='newsletter_input' />
            <span className='input_icon'><ArrowForwardIcon fontSize='large' className='arrow_icon'/></span>
        </div>
            <div className="footer_right">
                <div className="support">
                    <h5 className='support_title'>Support</h5>
                    <h5 className='support_item'>Help Center</h5>
                    <h5 className='support_item'>Account Information</h5>
                    <h5 className='support_item'>About</h5>
                    <h5 className='support_item'>Contact Us</h5>
                </div>
                <div className="help_n_solution">
                    <h5 className='support_title'>Help and Solution</h5>
                    <h5 className='support_item'>Talk to Support</h5>
                    <h5 className='support_item'>Support docs</h5>
                    <h5 className='support_item'>System status</h5>
                    <h5 className='support_item'>Covid responde</h5>
                </div>
                <div className="marketplace">
                    <h5 className='support_title'>Marketplace</h5>
                    <h5 className='support_item'>Photography</h5>
                    <h5 className='support_item'>Videography</h5>
                    <h5 className='support_item'>Makeup Artist</h5>
                    <h5 className='support_item'>Planner</h5>
                </div>
            </div>
    </div>
  )
}

export default Footer