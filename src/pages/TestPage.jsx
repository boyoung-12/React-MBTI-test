import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { calculateMBTI } from "../utils/MbtiCalculator";
import { createTestResult } from "../api/testResults";
import TestForm from "../components/TestForm";
import styled from "styled-components";
import { useState } from "react";

const TestPage = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [isTestDone, setIsTestDone] = useState(false);

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    console.log("resultData", resultData);
    await createTestResult(resultData);
    setIsTestDone(true);
  };

  return !isTestDone ? (
    <div>
      <h1>MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  ) : (
    <div>
      <p>제목</p>
      <p>내용</p>
      <button
        onClick={() => {
          setIsTestDone(false);
        }}
      >
        다시 테스트하기
      </button>
      <Link to="/testResultPage">모든 결과 보러가기</Link>
    </div>
  );
};

export default TestPage;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
