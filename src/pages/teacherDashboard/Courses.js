import "../../components/SideNav";
import "./Courses.css";
import CourseCard from "../../components/CourseCard";
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from "../../hooks/useCollection";
import SideNav from "../../components/SideNav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('course')
  const navigate = useNavigate()
  useEffect(() => {
    if(!user){
     navigate("/")
    }
  }, [!user,navigate])
  console.log(user)
  return (
    <div className="teacher-dash">
    <div className="teacher-sidenav">
    <SideNav  />
    </div>
      
      <div className="courses-container">
       {user && <h1>Welcome, <b>{user.displayName}</b> <br />
        Your Teaching Journey Begins here  Unlock your potential</h1>}
        <h2>My Courses </h2>
        { error && <p className="error">{error}</p>}
        <div>
        { documents && <CourseCard courses = {documents} />}
        </div>
        
      </div>
    </div>
  );
}
