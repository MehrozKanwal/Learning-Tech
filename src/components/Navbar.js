import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaListUl} from "react-icons/fa";
import navImg from '../asset/primary-logo.png';
import { useAuthContext } from '../hooks/useAuthContext';
import {useLogout} from '../hooks/useLogout'
//style
import './Navbar.css'
export default function Navbar() {
  const [navOpen,setNavOpen]=useState(false);
  const {user} = useAuthContext()
  const {logout, isPending} = useLogout()


  return <div className='navbar'>
  <div className='logo'>   <img className='nav-logo' src={navImg} alt="nav-logo"  /> </div>
    <div className="navbar-Link link-toggle" onClick={() => setNavOpen(!navOpen)}>
      <FaListUl />
   </div>
  

   <div  className={navOpen ?  'mobile-log-sign' : "log-sign"} >
  <ul>{!user && <>
    <li className='login'><Link to='/login'>LOGIN</Link></li>
    <li className='signup'><Link to='/signup'>SIGNUP</Link></li> </>}
    {user && <>
    
      <Link className='signupbtn-link' to ="/dashboard">
      <img className="user-img" src={user.photoURL} /> <span>{user.displayName}</span> </Link>
      <li>
      {!isPending && <button className="btn log-btn" onClick={logout} >Logout</button>}
       {isPending && <button className="btn log-btn" disabled>Logging out</button>}</li>
      </>
     
      }
      
     
      
    
  </ul>
</div>
  </div>;
}
