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
import Results from "./Results";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AppProvider } from "./utils/context";

function App() {
  return (
    <Router>
      <AppProvider>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/createQuiz" element={<CreateQuiz />} />
            <Route exact path="/profile/:token" element={<Profile />} />
            <Route exact path="/quiz/:id" element={<Quiz />} />
            <Route exact path="/quiz/:id/results" element={<Results />} />
          </Route>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
