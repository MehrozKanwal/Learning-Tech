import React from 'react'
import { Link } from 'react-router-dom'
import './SigninAlert.css'




const SigninAlert = ({setSigninAlert}) => {
 
  return (
      <>
     <div className="alert">
  <h6 className="message">Can't perform action. Make Sure to Login<br/></h6>
  <div className="options">
    <button className="Sbtn btn" id='cancel' onClick={()=>{setSigninAlert(false)}}>Cancel</button>
    <button className="Sbtn  btn btnBlack"><Link to='/login'>Login/Signup</Link></button>
  </div>
</div>
    </>
  )
}

export default SigninAlert