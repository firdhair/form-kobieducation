import React, { useState } from "react";

const Question = ({ question }) => {
  const [answer, setAnswer] = useState("");

  const handleOptionChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div>
      <h3>{question.title}</h3>
      <p>{question.description}</p>
      <form>
        {question.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={answer === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
      <p>You selected: {answer}</p>
    </div>
  );
};

export default Question;
