import cardBg from "./cardBg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTrash,faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import noData from "./noData.svg";
import { Alert } from "@mui/material";
import { useState } from "react";

const Quizes = ({ quizes ,setQuizes}) => {
  let [showAlert, setShowAlert] = useState(false);
  let [isLoading,setIsLoading] = useState(false)
  let handleDelete = (id) => {
    setIsLoading(true)
    fetch(process.env.REACT_APP_API_URL + "/quiz/" + id, {
      method: "DELETE",
    }).then(() => {
      setQuizes(quizes.filter((quiz)=> quiz._id !== id))
      console.log("Quiz Deleted");
      setIsLoading(false);
      setShowAlert(true);
    });
  };
  if(isLoading){
    return <div className="loading"></div>
  }
  if (quizes.length === 0) {
    return <>
    {showAlert && (
        <Alert severity="error" className="alert">
          Quiz Deleted Successfuly
        </Alert>
      )}
      <div className="noQuizes">
        <img src={noData} alt="" />
        <h2>No Quizes To Show</h2>
        <Link to={"/createQuiz"}>Create Your Own Quiz</Link>
      </div>
    </>
  }
  return (
    <>
      {showAlert && (
        <Alert severity="error" className="alert">
          Quiz Deleted Successfuly
        </Alert>
      )}
      <div className="quizes">
        {quizes.map((item) => {
          let {quizTitle,quizDesc,_id,quizPassword} = item
          return (
            <div className="quiz" style={{ maxWidth: "370px" }} key={_id}>
              <div className="cardImage">
                <img src={cardBg} alt="cardBackground" />
                {quizPassword && <FontAwesomeIcon icon={faLock} className="lock" />}
              </div>
              <div className="lock">
              </div>
              <div className="cardBody">
                <div className="quizTitle">{quizTitle}</div>
                <div className="quizDesc">{quizDesc}</div>
              </div>
              <div className="cardFooter">
                <div className="delete" onClick={() => handleDelete(_id)}>
                  <FontAwesomeIcon icon={faTrash} className="trash" />
                </div>
                <Link to={`/quiz/${_id}`}>
                  <FontAwesomeIcon icon={faPlay} className="play" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Quizes;
