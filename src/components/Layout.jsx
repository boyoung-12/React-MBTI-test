// import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUserContext } from "../context/UserContext";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  const handleLogout = () => {
    setUser(null);
    return navigate("/");
  };
  console.log("user", user);
  return (
    <div>
      <header>
        <NavBar>
          <Link to="/">home</Link>
          <div>
            {user ? (
              <ForOnlyUser>
                <Link to="/Profile">profile</Link>
                <Link to="/Testpage">test</Link>
                <Link to="/TestResultPage">result</Link>
                <button onClick={handleLogout}>logout</button>
              </ForOnlyUser>
            ) : (
              <Link to="/Login">login</Link>
            )}
          </div>
        </NavBar>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

const NavBar = styled.nav`
  background-color: #d6d6d6;
  height: 50px;
  display: flex;
  padding: 0px 30px;
  font-size: 30px;
  align-items: center;
  justify-content: space-between;
`;

const ForOnlyUser = styled.div`
  display: flex;
  gap: 30px;
`;
