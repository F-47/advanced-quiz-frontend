import React from "react";
import useFetch from "../useFetch";

const Profile = () => {
  let token = window.localStorage.getItem("token")
  let {isPending, data } = useFetch(process.env.REACT_APP_API_URL + "/profile/"+token);
  if (isPending) {
    return <div className="loading"></div>;
  }
  if (data.data) {
    let { firstname, lastname, email } = data.data;
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
