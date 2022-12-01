import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

let Questions = () => {
  let [inputList, setInputList] = useState([
    { quizQuestion: "", answers: "" },
  ]);

  let handleInputChange = (e, index) => {
    let { name, value } = e.target;
    let list = [...inputList];
    inputList[index][name] = value;
    setInputList(list);
  };

  let handleAddClick = () => {
    setInputList([...inputList, { quizQuestion: "", answers: "" }]);
  };

let handleRemoveClick = (index) => {
    let list = [...inputList];
    console.log(list);
    list.splice(index, 1);
    setInputList(list);
  };

  return (
    <>
      {inputList.map((x, i) => {
        return (
          <div className="box" key={i}>
            <div className="quizQuestion">
              <label htmlFor="quizQuestion" className="form-label">
                Quiz Question:
              </label>
              <input
                name="quizQuestion"
                placeholder="Enter Question"
                value={x.quizQuestion}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            <div className="answersContainer">
              <label htmlFor="answers" className="form-label">
                Answers:
              </label>
              <div className="answerInput">
                <input
                  type="text"
                  name="answers"
                  placeholder="Enter Answer"
                  value={x.answers}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </div>
            </div>
            <div className="answers">
              <div className="answer">
                <input
                  type="radio"
                  id="answer1"
                  name="answer"
                  value="answer1"
                />
                <label htmlFor="answer1">test</label>
              </div>
            </div>
            <div className="addNewQuestionBtn">
              {inputList.length !== 1 && (
                <button onClick={() => handleRemoveClick(i)}>Remove</button>
              )}
              {inputList.length - 1 === i && (
                <button onClick={handleAddClick}>Add New Question</button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Questions;
