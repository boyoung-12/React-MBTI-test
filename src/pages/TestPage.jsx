import { useUserContext } from "../context/UserContext";

const TestPage = () => {
  const { user } = useUserContext();
  return <div>TestPage</div>;
};

export default TestPage;
