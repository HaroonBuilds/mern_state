import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Singup from "./pages/Singup";
import Singin from "./pages/Singin";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>HOME</Route>
        <Route path="signup" element={<Singup/>}>SIGNUP</Route>
        <Route path="signin" element={<Singin/>}>SIGNIN</Route>
        <Route path="profile" element={<Profile/>}>PROFILE</Route>
        <Route path="about" element={<About/>}>ABOUT</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
