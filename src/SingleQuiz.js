import cardBg from "./cardBg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SingleQuiz = ({ quizes }) => {
  return (
    <>
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
              <FontAwesomeIcon icon={faEllipsis} className="ellipsis" />
              <Link to={`/quiz/${item._id}`}>
                <FontAwesomeIcon icon={faPlay} className="play" />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleQuiz;
