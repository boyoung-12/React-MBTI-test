import styled from "styled-components";
import { useUserContext } from "../context/UserContext";
import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, onUpdate, onDelete }) => {
  const { user } = useUserContext();
  return (
    <ResultBox>
      {results
        .filter((result) => result.visibility || result.userId === user.id)
        .map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            user={user}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
    </ResultBox>
  );
};

export default TestResultList;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
