import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./imgs/logo.png";

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
            <Link to="/" onClick={() => setShowBtn(false)}>Home</Link>
          </li>
          {token && (
            <li>
              <Link to="/createQuiz" onClick={() => setShowBtn(false)}>Create Quiz</Link>
            </li>
          )}
          {!token && (
            <li>
              <Link to="/login" onClick={() => setShowBtn(false)}>Login</Link>
            </li>
          )}
          {token && (
            <li className="accountBtn">
              <Link onClick={() => setShowBtn(!showBtn)}>Account</Link>
              {showBtn && (
                <div className="dropMenu">
                  <Link to={"/profile/"+token}onClick={() => setShowBtn(false)}>Profile</Link>
                  <Link
                    className="signOutBtn"
                    onClick={() => {
                      setShowBtn(false)
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
