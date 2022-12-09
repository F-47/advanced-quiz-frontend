import { useState } from "react";
import React from "react";
import { useGlobalContext } from "./context";

const Profile = () => {
  let [userData, setUserData] = useState("");
  let {isLoading,setIsLoading} = useGlobalContext()
    fetch(process.env.REACT_APP_API_URL + "/profile", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: window.localStorage.getItem("token") }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setIsLoading(false);
      });
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (userData) {
    let { firstname, lastname, email } = userData.data;
    return (
      <div className="profile">
        <div className="container">
          <h2>Profile</h2>
          <p>
            Manage your details, view your tier status and change your password
          </p>
          <div className="generalInfo">
            <div className="title">General Info</div>
            <div className="fields">
              <div className="formFields">
                <label htmlFor="firstname" className="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  readOnly
                />
              </div>
              <div className="formFields">
                <label htmlFor="lastname" className="form-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="security">
            <div className="title">Security</div>
            <div className="formFields">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
