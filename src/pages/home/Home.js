import React from 'react';
import sladerImg from '../../asset/slader.png'
import footImg from '../../asset/slader2.png'


//style
import './Home.css'
export default function Home() {
  return <div>
     <div className='container'>
       <img className='slader' src={sladerImg} alt="slader" />
       <p>Your career journey begins here</p>
       <h1>START LEARNING TODAY</h1>
       <button className="btn-slader" >Signup</button>
       <p className='teach'>Want to teach?</p>
       <h3>Join now</h3>
     </div> 
     <div className='all-courses'>
       <h1>ALL COURSES</h1>
       <div className='course-cart'>

       </div>
     </div>
     <div className='container-2'>
     <div className='footer-img'>
       <img src={footImg} alt="" />
     </div>
     <div className='foot-details'>
       <h1>START TEACHING TODAY</h1>
       <p>from the comfort of your home</p>
       <button className="btn" >Signup</button>
     </div>
     </div>
  </div>;
}