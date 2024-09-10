import Router from "./router/Router";
import "../reset.css";
import UserProvider from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
};

export default App;
