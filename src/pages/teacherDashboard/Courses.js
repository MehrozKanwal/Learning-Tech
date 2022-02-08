import "../../components/SideNav";
import "./Courses.css"
import { useAuthContext } from '../../hooks/useAuthContext'

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import SideNav from "../../components/SideNav";
let Teacher = 'Ahsan';
export default function Courses() {
  const { user } = useAuthContext()

  return (
    <div>
      <SideNav />
      <div className="courses-container">
        <h1>Welcome, <b>{Teacher}</b> <br /> Your Teaching Journey Begins here</h1>
        <h2>My Courses </h2>
      </div>
    </div>
  );
}
