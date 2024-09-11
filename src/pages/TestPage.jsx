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
      userId: user.userId,
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
    <Title>
      <h1>MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </Title>
  ) : (
    <ResultBox>
      <p>테스트결과</p>
      <p>내용</p>
      <ClickBox>
        <button
          onClick={() => {
            setIsTestDone(false);
          }}
        >
          다시 테스트하기
        </button>
        <Link to="/testResultPage">모든 결과 보러가기</Link>
      </ClickBox>
    </ResultBox>
  );
};

export default TestPage;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ResultBox = styled.div`
  background-color: green;
  width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  height: 300px;
  gap: 50px;
`;

const ClickBox = styled.div`
  display: flex;
  gap: 30px;
`;
