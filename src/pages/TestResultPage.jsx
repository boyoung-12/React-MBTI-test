import { useEffect, useState } from "react";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResults";
import TestResultList from "../components/TestResultList";
import { useUserContext } from "../context/UserContext";

const TestResultPage = () => {
  const [results, setResults] = useState([]);
  const { user } = useUserContext();

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
      <div>
        <h1>모든 테스트 결과</h1>
        <TestResultList
          results={results}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};
export default TestResultPage;
