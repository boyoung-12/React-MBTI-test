import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../api/auth";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

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

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      await register(formData);

      navigate("/Login");
    } catch (error) {
      window.alert("회원가입에 실패했습니다. 다시 시도 해주세여.");
      console.log("error", error);
    }
  };

  return (
    <SignupContainer>
      <h1>회원가입</h1>
      <form onSubmit={handleSignup}>
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
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
          <InputForNickname
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
            placeholder="Nickname"
          />
          <ButtonForSignup type="submit">Sign up</ButtonForSignup>
        </InputBox>
      </form>
      <AskingLoginStatusBox>
        <p>이미 계정이 있으신가요?</p>
        <Link to="/Login">Log in</Link>
      </AskingLoginStatusBox>
    </SignupContainer>
  );
};

export default Signup;
const SignupContainer = styled.div`
  margin: 50px auto;
  background-color: #e1e1e1;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const InputBox = styled.div`
  background-color: white;
  height: 250px;
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
const InputForNickname = styled.input`
  height: 40px;
  border-radius: 10px;
`;

const ButtonForSignup = styled.button`
  height: 40px;
  background-color: red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AskingLoginStatusBox = styled.div`
  display: flex;
  gap: 5px;
`;
