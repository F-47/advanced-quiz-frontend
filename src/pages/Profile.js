import React from "react";
import useFetch from "../useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  let token = window.localStorage.getItem("token")
  let {isPending, data } = useFetch(process.env.REACT_APP_API_URL + "/profile/"+token);
  if (isPending) {
    return <div className="loading"></div>;
  }
  if (data.data) {
    let { _id,firstname, lastname, email } = data.data;
    let handleDelete = (id) => {
      fetch(process.env.REACT_APP_API_URL + "/user/" + id, {
        method: "DELETE",
      }).then(() => {
        window.localStorage.removeItem('token')
        window.location.href = '/'
      });
    };
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
          <div className="delete" onClick={() => handleDelete(_id)}><FontAwesomeIcon icon={faTrash} className="trash" />Delete Account</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
