import StudentDashboard from './pages/studentDashboard/StudentDashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Course from './pages/course/Course';
import EnrolledCourse from './pages/enrolledCourse/EnrolledCourse';
import Quiz from './pages/quiz/Quiz';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ActiveQuiz from './pages/teacherDashboard/ActiveQuiz';
import Courses from './pages/teacherDashboard/Courses';
import CreateCourse from './pages/teacherDashboard/CreateCourse';
import CreateQuiz from './pages/teacherDashboard/CreateQuiz'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
//style
import './App.css';

function App() {
  const {user, authIsReady} = useAuthContext()
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route exact path="/login" element={!user ? <Login />: <Home />} />
        <Route exact path="/signup" element={!user ? <Signup />: <Home />} />
        <Route exact path="/dashboard" element={user ? <StudentDashboard /> : <Signup />} />
        <Route exact path="/" element={<Home /> } />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/course/:id" element={user ? <Course />:<Login />} />

        <Route exact path="/enrolledcourse/:id" element={<EnrolledCourse />} />
        <Route exact path="/quiz" element={<Quiz />} />
      
        <Route exact path="/courses" element={user ? <Courses /> : <Login />} />
        <Route exact path="/create-course" element={user ?<CreateCourse />: <Login />} />
        <Route exact path="/create-quiz" element={user ?<CreateQuiz />:<Login />} />
        <Route exact path="/active-quiz" element={user ?<ActiveQuiz />:<Login />} />
      </Routes>
       <Footer />
     </BrowserRouter>  
    </div>
  );
}

export default App;
