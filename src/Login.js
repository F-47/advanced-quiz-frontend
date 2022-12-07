import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "./login.svg";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return <div className="login">
      <div className="container">
        <div className="left">
          <img src={loginImg} alt="" />
        </div>
        <div className="right">
          <form action="">
            <h1>Hello! Welcome back.</h1>
            <p>
              Login With your data that you entered during Your registeration.
            </p>
            <div className="formFields">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Enter your email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formFields">
              <label htmlFor="Password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                autoComplete="off"
                placeholder="Enter your password"
                className="form-control"
                id="Password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn submitBtn">Login</button>
            <div>
              Don't have an account? <Link to={"/signup"}>SignUp</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
};

export default Login;
