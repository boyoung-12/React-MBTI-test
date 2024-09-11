import { useEffect, useState } from "react";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResults";
import TestResultList from "../components/TestResultList";
import styled from "styled-components";

const TestResultPage = () => {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await getTestResults();
    setResults(data);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = async (id, view) => {
    await updateTestResultVisibility(id, view);
    fetchResults();
  };

  const handleDelete = async (e, id) => {
    await deleteTestResult(id);
    fetchResults();
  };

  return (
    <div>
      <ResultContainer>
        <h1>모든 테스트 결과</h1>
        <TestResultList
          results={results}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </ResultContainer>
    </div>
  );
};
export default TestResultPage;

const ResultContainer = styled.div`
  width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;
