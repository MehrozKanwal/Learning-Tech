import React from 'react';
import footImg from '../asset/secondary-logo.png'
import {FaFacebookF, FaLinkedin,FaTwitter } from "react-icons/fa";


//style
import './Footer.css'
export default function Footer() {
  return <div className='footer'>
  <div className='footer-inf'>
    <ul>
      <li>Teach on Learning Tech</li>
      <li>About Us</li>
      <li>Privacy Policy</li>
      <div className='footer-logo'>
      <img className='foot-logo' src={footImg} alt="footer-logo"  /></div>
    </ul>
  </div>
  <div className='footer-links'>
    <div className='f-links'>
    <ul>
      <li><a href='#'><FaFacebookF /></a></li>
      <li><a href='#'><FaLinkedin /></a></li>
      <li><a href='#'><FaTwitter /></a></li>
    </ul>
         
    </div>
    <div>
       <p className='copyright'>© 2020 Learning Tech. All rights reserved. </p>
    </div>
  
  </div>
    
  </div>;
}
