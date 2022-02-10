import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import EnrolledCourse from "./pages/enrolledCourse/EnrolledCourse";
import Quiz from "./pages/quiz/Quiz";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ActiveQuiz from "./pages/teacherDashboard/ActiveQuiz";
import Courses from "./pages/teacherDashboard/Courses";
import CreateCourse from "./pages/teacherDashboard/CreateCourse";
import CreateQuiz from "./pages/teacherDashboard/CreateQuiz";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
//style
import "./App.css";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={ <StudentDashboard /> } />
        <Route exact path="/" element={<Home /> } />
        {/* <Route exact path="/course" element={<Course />} /> */}
        <Route exact path="/course/:id" element={ <Course />} />

        <Route exact path="/enrolledcourse/:id" element={<EnrolledCourse />} />
        <Route exact path="/quiz" element={<Quiz />} />
      
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/create-course" element={<CreateCourse />} />
        <Route exact path="/create-quiz" element={<CreateQuiz />} />
        <Route exact path="/active-quiz" element={<ActiveQuiz />} />
      </Routes>
       <Footer />
     </BrowserRouter>  
    </div>
  );
}

export default App;
