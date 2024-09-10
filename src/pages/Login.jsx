import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../api/auth";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useUserContext();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const value = e.target.value;

    const newUser = {
      ...formData,
      [e.target.name]: value, //변수써서 지정한 부분만 채인지
    };
    console.log("뉴유저", newUser);

    setFormData(newUser);
  };
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const result = await login(formData);
      setUser(result);
      console.log("result", result);
      localStorage.setItem("accessToken", result.accessToken);
      navigate("/");
    } catch (error) {
      window.alert("로그인에 실패했습니다. 다시 시도 해주세여.");
    }
  };

  return (
    <LoginContainer>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <InputBox>
          <InputForId
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            placeholder="ID"
          />
          <InputForPassword
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
          <ButtonForLogin type="submit">login</ButtonForLogin>
        </InputBox>
      </form>
      <AskingSignupStatusBox>
        <p>계정이 없으신가요?</p>
        <Link to="/Signup">Sign up</Link>
      </AskingSignupStatusBox>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  margin: 50px auto;
  background-color: #e1e1e1;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const InputBox = styled.div`
  background-color: white;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  border-radius: 10px;
`;

const InputForId = styled.input`
  height: 40px;
  border-radius: 10px;
`;

const InputForPassword = styled.input`
  height: 40px;
  border-radius: 10px;
`;

const ButtonForLogin = styled.button`
  height: 40px;
  background-color: red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AskingSignupStatusBox = styled.div`
  display: flex;
  gap: 5px;
`;
