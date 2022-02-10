import React from 'react';
import { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { projectAuth } from '../../firebase/Config';

//style
import './Login.css'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, isPending, error} = useLogin()
  const navigate = useNavigate()
  const {user} = useAuthContext()
  const { documents } = useCollection('users')

  const handleSubmit =  (e) => {
    e.preventDefault()
    login(email, password)
    
  }
  useEffect(() => {
    if(user){
     console.log(user + "jhcujas")
      
      {documents && documents.map((use)=>{
        const a = projectAuth.currentUser;
       if (a.uid === use.id){
         if(use.categorytype === "teacher"){
           console.log(a.categorytype)
           navigate("/courses")
           
         } 
         else{
           navigate("/dashboard")
         }
       }
      })}  
      }
     
 }, [user,navigate])
  return <div>
    <form onSubmit={handleSubmit} className="auth-form">
      <h1>Login your Account</h1>
      
        <input
          required 
          type="email" 
          placeholder=' E-mail'
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      
        <input
          required
          placeholder=' Password'
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
        {!isPending && <button className="btn" >Login</button>}
        {isPending && <button className="btn" disabled>loading</button>}
        {error && <div className="error">{error}</div>}
        <p>Don't have an account?
         <Link to='/signup'>SignUp</Link></p>
         
    </form>
  </div>;
}
