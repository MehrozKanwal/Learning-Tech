import React from 'react';
import CourseCard from "../../components/CourseCard";
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from "../../hooks/useCollection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('course')
  const navigate = useNavigate()
  useEffect(() => {
    if(!user){
     navigate("/")
    }
  }, [!user,navigate])
  return <div>
    <div className="courses-container">
       {user && <h1>Welcome, <b>{user.displayName}</b> <br />
        Your Learning Journey Begins here</h1>}
        <h2>All Courses </h2>
        { error && <p className="error">{error}</p>}
      { documents && <CourseCard courses = {documents} />}
      </div>
  </div>;
}
