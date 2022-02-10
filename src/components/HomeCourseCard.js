import './CourseCard.css';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import SigninAlert from './SigninAlert';
import { useState } from 'react';


export default function HomeCourseCard({ courses }) {
  const { user } = useAuthContext();
  const navigate = useNavigate()
  const [signinAlert,setSigninAlert]=useState(false)
  const handleClick = (e) =>{
   e.preventDefault()
   if(user){
    
    //  navigate("{`/course/${course.id}`}")
     setSigninAlert(false)
   }
   else{
    setSigninAlert(true)
   }
  }
    return (
      <div>
  <div className='course-card'>
      {courses.length === 0 && <p>No Courses yet</p>}
      {courses.map(course=>(
          <div onClick={handleClick} key={course.id}>
              <h4>{course.title}</h4>
              <p><b>Course Instructor</b></p>
              <p>{course.createdBy.displayName} </p>
              </div>
      ))}
   
      </div>
      {signinAlert && <SigninAlert setSigninAlert={setSigninAlert}/>}
  </div>
  );
}