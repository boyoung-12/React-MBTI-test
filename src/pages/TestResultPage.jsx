import { useUserContext } from "../context/UserContext";

const TestResultPage = () => {
  const { user } = useUserContext();
  return <div>TestResultPage</div>;
};

export default TestResultPage;
