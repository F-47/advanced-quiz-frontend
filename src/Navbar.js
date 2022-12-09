import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  let token = window.localStorage.getItem("token");
  let [showBtn, setShowBtn] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {token && (
            <li>
              <Link to="/createQuiz">Create Quiz</Link>
            </li>
          )}
          {!token && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {token && (
            <li className="accountBtn">
              <Link onClick={() => setShowBtn(!showBtn)}>Account</Link>
              {showBtn && (
                <div className="dropMenu">
                  <Link to="/profile">Profile</Link>
                  <Link
                    className="signOutBtn"
                    onClick={() => {
                      window.localStorage.removeItem("token");
                      window.location.href = "/";
                    }}
                  >
                    Signout
                  </Link>
                </div>
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
