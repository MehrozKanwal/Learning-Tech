import './CourseCard.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";
import { useAuthContext } from '../hooks/useAuthContext';
export default function CourseCard({ courses }) {
  const { user } = useAuthContext();
    return (
  <div className='course-card'>
      {courses.length === 0 && <p>No Courses yet</p>}
      {courses.map(course=>(
          <Link to={`/course/${course.id}`} key={course.id}>
              <h4>{course.title}</h4>
              <p><b>Course Instructor</b></p>
              <p>{course.createdBy.displayName}</p>
              </Link>
      ))}
  </div>
  );
}
