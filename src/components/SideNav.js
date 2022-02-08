import './SideNav.css';
import {
  NavLink
} from "react-router-dom";

export default function SideNav() {
  return (
  <div className='side-nav'>
    <h1>Dashboard</h1>
    <ul>
      <li>
        <NavLink className='side-nav-link' to="/courses"> Courses </NavLink>
      </li>
      <li >
        <NavLink className='side-nav-link' to="/create-course"> Create New </NavLink>
      </li>
      <li >
        <NavLink className='side-nav-link' to="/active-quiz"> Active Quiz </NavLink>
      </li>
      <li >
        <NavLink className='side-nav-link' to="/create-quiz"> Create Quiz </NavLink>
      </li>
    </ul>
  </div>
  );
}
