import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../utils/context";

const Profile = () => {
  let {data,isPending} = useGlobalContext()
  if (isPending) {
    return <div className="loading"></div>;
  }
  if (data.result1 && data.result2) {
    let { _id, firstname, lastname, email } = data.result1;
    let handleDelete = (id) => {
      fetch(process.env.REACT_APP_API_URL + "/user/" + id, {
        method: "DELETE",
      }).then(() => {
        window.localStorage.removeItem("token");
        window.location.href = "/";
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
          <div className="quizesTaken">
            <div className="title">Quizes Taken:</div>
            {data.result2.length !== 0 ? (
              data.result2.map((quiz) => {
                let { quizTitle, quizID } = quiz;
                return (
                  <div className="quizProfile" key={quiz._id}>
                    <div className="quizName">{quizTitle}</div>
                    <Link
                      className="results"
                      to={"/quiz/" + quizID + "/results"}
                    >
                      See Results
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="notFound">Nothing here to see</div>
            )}
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
            <div className="delete" onClick={() => handleDelete(_id)}>
              <FontAwesomeIcon icon={faTrash} className="trash" />
              Delete Account
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
