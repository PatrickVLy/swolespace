import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar"
import Single from "./pages/single/Single"
import Posts from "./components/posts/Posts";
import LogWorkout from "./pages/logworkout/LogWorkout";
import Settings from "./pages/settings/Settings";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="signup/*" element={user ? <Home/> : <SignUp/>}/>
      <Route path="login/*" element={user ? <Home/> : <LogIn/>}/>
      <Route path="logworkout/*" element={user ? <LogWorkout/> : <SignUp/>}/>
      <Route path="settings/*" element={user ? <Settings/> : <SignUp/>}/>
      <Route path="post/:postId" element={<Single/>}/>
      </Routes>
    


      
      </Router>
  );
}

export default App;
