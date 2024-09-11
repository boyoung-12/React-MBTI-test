import { useState } from "react";
import { questions } from "../data/questions";
import styled from "styled-components";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <TestContainer>
      <form onSubmit={handleSubmit}>
        <EachOfTests>
          {questions.map((q, index) => (
            <div key={q.id}>
              <p>{q.question}</p>
              {q.options.map((option, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleChange(index, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}

          <button type="submit">제출하기</button>
        </EachOfTests>
      </form>
    </TestContainer>
  );
};

export default TestForm;

const TestContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 30px 0px;
`;

const EachOfTests = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
