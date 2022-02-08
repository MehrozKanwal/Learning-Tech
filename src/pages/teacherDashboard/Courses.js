import "../../components/SideNav";
import "./Courses.css";
import CourseCard from "../../components/CourseCard";
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from "../../hooks/useCollection";
import SideNav from "../../components/SideNav";

export default function Courses() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('course')
  return (
    <div>
      <SideNav />
      <div className="courses-container">
        <h1>Welcome, <b>{user.displayName}</b> <br /> Your Teaching Journey Begins here</h1>
        <h2>My Courses </h2>
        { error && <p className="error">{error}</p>}
        { documents && <CourseCard courses = {documents} />}
      </div>
    </div>
  );
}
