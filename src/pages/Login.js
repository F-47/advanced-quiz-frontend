import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../imgs/login.svg";
import Alert from "../Alert";
import { useGlobalContext } from "../utils/context";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let {
    showAlert,
    setShowAlert,
    alertText,
    setAlertText,
    alertType,
    setAlertType,
  } = useGlobalContext();

  let user = { email, password };
  let handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_API_URL + "/login", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          window.localStorage.setItem("token", data.data);
          setAlertType("success");
          setAlertText([{ msg: "LoggedIn" }]);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
            window.location.href = "/";
          }, 1000);
        } else {
          setAlertType("danger");
          setAlertText([{ msg: data.msg }]);
          setShowAlert(true);
        }
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <img src={loginImg} alt="" />
        </div>
        <div className="right">
          <form action="" onSubmit={handleSubmit}>
            <h1>Hello! Welcome back.</h1>
            <p>
              Login With your data that you entered during Your registeration.
            </p>
            {showAlert && <Alert alertText={alertText} alertType={alertType} />}
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
              Don't have an account?{" "}
              <Link to={"/signup"} className="signUpBtn">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
