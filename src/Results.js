import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./utils/useFetch";

const Results = () => {
  let { id } = useParams();
  let [userAnswers, setUserAnswers] = useState([]);
  let { isPending, data } = useFetch(
    process.env.REACT_APP_API_URL + "/quiz/" + id
  );

  let fetchUserAnswers = () => {
    fetch(process.env.REACT_APP_API_URL + "/quizActivity/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: window.localStorage.getItem("token") }),
    })
      .then((res) => res.json())
      .then((data) => setUserAnswers(data.userAnswers));
  };
  useEffect(() => {
    fetchUserAnswers();
  }, []);
  
  if (isPending) {
    return <div className="loading"></div>;
  }
  if (data.questions && data) {
    return (
      <div className="userResults">
        <div className="container">
          {data.questions.map((item, i) => {
            return (
              <div className="box" key={i}>
                <div className="question">
                  {i + 1}. {item.question} ?
                </div>
                <div className="answers">
                  {item.answerOptions.map((answer, j) => {
                    return (
                      <div
                        className={userAnswers[i]=== (j+1) && answer.isCorrect  ? "answer success" : userAnswers[i]=== (j+1) && !answer.isCorrect ? "answer danger" : answer.isCorrect ?"answer success" :"answer"}
                        key={j}>
                        {j + 1}. {answer.answerText}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Results;
