import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import CreateQuiz from "./pages/CreateQuiz";
import Quiz from "./Quiz";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/createQuiz" element={<CreateQuiz />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/quiz/:id" element={<Quiz />}></Route>
        </Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
