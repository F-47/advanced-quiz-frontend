import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import signUpImg from "./signUpImg.svg";
import Alert from "./Alert";
import { useGlobalContext } from "./context";

const Signup = () => {
  let [firstname, setfirstname] = useState("");
  let [lastname, setlastname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password2, setpassword2] = useState("");
  let {showAlert,setShowAlert,alertText,setAlertText,alertType,setAlertType} = useGlobalContext()
  let user = {
    firstname,
    lastname,
    email,
    password,
    password2,
  };
  let navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    let validate = (user) => {
      const errors = [];
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!firstname || !lastname || !email || !password) {
        errors.push({ msg: "Please fill out all the fields" });
      }
      if (!user.firstname) {
        errors.push({ msg: "First Name is required!" });
      }
      if (!user.lastname) {
        errors.push({ msg: "Last Name is required!" });
      }
      if (!user.email) {
        errors.push({ msg: "Email is required!" });
      } else if (!regex.test(user.email)) {
        errors.push({ msg: "Email format is not valid" });
      }
      if (!user.password) {
        errors.push({ msg: "Password is required" });
      } else if (user.password.length < 4) {
        errors.push({ msg: "Password must be more than 4 characters" });
      } else if (user.password.length > 10) {
        errors.push({ msg: "Password cannot exceed more than 10 characters" });
      } else if (user.password !== user.password2) {
        errors.push({ msg: "Passwords don't match" });
      }
      return errors;
    };
    let err = validate(user);
    if (err.length === 0) {
      let response = await fetch(process.env.REACT_APP_API_URL + "/signup", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (response.err) {
        setAlertText([{msg:"Signup error"}]);
        setShowAlert(true);
      } else {
        setAlertType("success")
        setAlertText([{msg:"Account Created"}]);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate('/login')
        }, 2000);
      }
    } else {
      setAlertType("danger")
      setAlertText(err);
      setShowAlert(true);
    }
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="left">
     
          <form action="" onSubmit={handleSubmit}>
            <h1>Create Your Account</h1>
            <p>
              Please enter your details to sign up and be part of our great
              community.
            </p>
            {showAlert && <Alert alertText={alertText} alertType={alertType} />}
            <div className="formFields">
              <label htmlFor="firstname" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Enter your first name"
                className="form-control"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
            </div>
            <div className="formFields">
              <label htmlFor="lastname" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Enter your last name"
                className="form-control"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </div>
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
                Create Password:
              </label>
              <input
                type="password"
                autoComplete="off"
                placeholder="Create your password"
                className="form-control"
                id="Password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="formFields">
              <label htmlFor="password2" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                autoComplete="off"
                placeholder="Confirm your password"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                onChange={(e) => setpassword2(e.target.value)}
              />
            </div>
            <button className="btn submitBtn">Signup</button>
            <div>
              Already have an account?{" "}
              <Link to={"/logIn"} className="signInBtn">
                SignIn
              </Link>
            </div>
          </form>
        </div>
        <div className="right">
          <img src={signUpImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
