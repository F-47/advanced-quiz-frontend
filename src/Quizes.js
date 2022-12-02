import cardBg from "./cardBg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import noData from './noData.svg'

const Quizes = ({ quizes }) => {
  let handleDelete = (id) =>{
    console.log(id)
    fetch(process.env.REACT_APP_API_URL + "/quiz/"+id, {
      method: "DELETE",
    }).then(() => {
      console.log("Quiz Deleted");
      window.location.reload()
    });
  }
  console.log(quizes.length)
  if(quizes.length===0){
    return <div className="noQuizes">
      <img src={noData} alt="" />
      <h2>No Quizes To Show</h2>
      <Link to={'/createQuiz'}>Create Your Own Quiz</Link>
    </div>
  }
  return <div className="quizes">
      {quizes.map((item) => {
        return (
          <div className="quiz" style={{ maxWidth: "370px" }} key={item._id}>
            <div className="cardImage">
              <img src={cardBg} alt="cardBackground" />
            </div>
            <div className="cardBody">
              <div className="quizTitle">{item.quizTitle} Quiz</div>
              <div className="quizDesc">{item.quizDesc}</div>
            </div>
            <div className="cardFooter">
              <div className="delete" onClick={()=>handleDelete(item._id)}>
                <FontAwesomeIcon icon={faTrash} className="trash" />
              </div>
              <Link to={`/quiz/${item._id}`}>
                <FontAwesomeIcon icon={faPlay} className="play" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
};

export default Quizes;
