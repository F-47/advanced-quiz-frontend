import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Timer from "./Timer";


const Quiz = () => {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let { id } = useParams();
  let [showScore, setShowScore] = useState(false);
  let [score, setScore] = useState(0);
  let { isPending, data } = useFetch(
    process.env.REACT_APP_API_URL + "/quiz/" + id
  );

  if (isPending) {
    return <div className="loading"></div>;
  }

  if (data.questions && data) {
    let length = data.questions.length;
    let handleButtonClick = (isCorrect) => {
      if (isCorrect === true) {
        let newScore = score + 1;
        setScore(newScore);
      }
      let nextQuestion = currentQuestion + 1;
      if (nextQuestion < length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
    return (
      <div className="questions">
        <div className="container">
          {showScore ? (
            <div className="score">
              You scored {score} out of {length}
            </div>
          ) : (
            <>
              <div className="question-box">
                <div className="question-header">
                  <h2>Question {currentQuestion + 1}/{length}</h2>
                  <div className="timer">
                  <Timer time={data.quizTime}/>
                  </div>
                </div>
                <div className="thequestion">
                  {data.questions[currentQuestion].question} ?
                </div>
                <div className="answers">
                  {data.questions[currentQuestion].answerOptions.map(
                    (item, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => handleButtonClick(item.isCorrect)}
                        >
                          {index}. {item.answerText}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default Quiz;
