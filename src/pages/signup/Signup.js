import React from 'react';
import { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import { useAuthContext } from '../../hooks/useAuthContext';

//style
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const [categorytype, setCategorytype] = useState({category:"student"})
  const { signup, isPending, error } = useSignup()
  const {user} = useAuthContext()
  const navigate = useNavigate()
  useEffect(() => {
    console.log('test',user);
    if(user){
      if(categorytype === "student"){
        navigate("/dashboard")
      }
      else{
        navigate("/courses")
      }
     
     }
 }, [user])
  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName ,thumbnail,categorytype.category)
    
  }
   
  const handleChange = (e) => {
    const name = e.target.name
    const value= e.target.value
    // alert(`${name}: ${value}`)
    setCategorytype({...categorytype,[name]:value})
     return setCategorytype
  }
  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    if (selected.size > 1000000) {
      setThumbnailError('Image file size must be less than 100kb')
      return
    }
    
    setThumbnailError(null)
    setThumbnail(selected)
    console.log('thumbnail updated')
  }
  return <div>
    <form onSubmit={handleSubmit} className="auth-form">
      <h1>Create An Account</h1>
      <p>Create an account to enjoy all the services without any ads for free!</p>
      
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
        <input
          required
          type="text" 
          placeholder=' Display Name'
          onChange={(e) => setDisplayName(e.target.value)} 
          value={displayName}
        />
      
        <input 
         placeholder='Choose Image'
          required
          type="file" 
          onChange={handleFileChange}
        />
        <div className='radio-select'>
        <input
          type="radio" 
          checked={categorytype.category=="student"}
          onChange={handleChange} 
          name='category'
          value='student'
        />
        <label>Student</label>
        <input
          type="radio" 
          checked={categorytype.category=="teacher"}
          onChange={handleChange}
          name='category'
          value='teacher'
        />
        <label>Teacher</label>
        </div>
        {thumbnailError && <div className="error">{thumbnailError}</div>}
        {!isPending && <button className="btn" >Signup</button>}
        {isPending && <button className="btn" disabled>loading</button>}
        {error && <div className="error">{error}</div>}

         <p>Already Have An Account?
         <Link to='/login'>Sign In</Link></p>
         
      
    </form>
  </div>;
}
