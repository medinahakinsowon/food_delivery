import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer_content">
        <div className='footer_left'>
          <img src={assets.logo}/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo vel perferendis consectetur maiores quae omnis, eveniet cum? Optio, natus odit aspernatur nam laboriosam repellat fugiat?</p>
          <div className="footer_social_icons">
            <img src={assets.facebook_icon}/>
            <img src={assets.linkedin_icon}/>
            <img src={assets.twitter_icon}/>
          </div>
        </div>
        <div className='footer_middle'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Private Policy</li>
          </ul>
        </div>
        <div className='footer_right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+234-801-1238-090-</li>
            <li>contact@goodfood.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className='footer_copyright'>Copyright 2024 @GoodFood.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
