import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Navbar from "./Navbar";
import CreateQuiz from './CreateQuiz'
import Quiz from "./Quiz";
import NotFound from "./NotFound";

function App() {
  return <Router>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/quiz/:id" element={<Quiz/>}></Route>
      <Route exact path="/createQuiz" element={<CreateQuiz/>}></Route>
      <Route  path="*" element={<NotFound/>}></Route>
    </Routes>
  </Router>
}

export default App;
