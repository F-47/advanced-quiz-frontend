import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Navbar from "./Navbar";
import CreateQuiz from './CreateQuiz'
import Quiz from "./Quiz";
import NotFound from "./NotFound";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function App() {
  return <Router>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/quiz/:id" element={<Quiz/>}></Route>
      <Route exact path="/createQuiz" element={<CreateQuiz/>}></Route>
      <Route exact path="/signup" element={<Signup/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/profile" element={<Profile/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  </Router>
}

export default App;
