import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
  //여기 칠드런은 뭘 리턴하는거야?-감싸준페이지 리턴함 왜냐하면 감싸주면 안보이니깐
  //감싸준걸 내보내 줘야지 뭘 감싸준지를 짜잔하고 보여줄 수 있음
};

export default ProtectedRoute;
