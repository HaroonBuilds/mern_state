import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>HOME</Route>
        <Route path="signup" element={<SignUp/>}>SIGNUP</Route>
        <Route path="signin" element={<SignIn/>}>SIGNIN</Route>
        <Route path="profile" element={<Profile/>}>PROFILE</Route>
        <Route path="about" element={<About/>}>ABOUT</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
