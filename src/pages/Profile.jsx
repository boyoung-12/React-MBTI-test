import styled from "styled-components";
import { useUserContext } from "../context/UserContext";
import { getUserProfile, updateProfile } from "../api/auth";
import { useState } from "react";

const Profile = () => {
  const { user, setUser } = useUserContext();
  const [userNickname, setUserNickname] = useState(user?.nickname || "");

  const handleChange = (e) => {
    setUserNickname(e.target.value);
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("accessToken");
      console.log("token", token);
      const userInfo = await getUserProfile(token);
      console.log("userInfo", userInfo);
      const newUser = {
        ...userInfo,
        nickname: userNickname,
      };

      setUser(newUser);

      updateProfile(userNickname, token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProfileContainer>
      <h1>프로필수정</h1>
      <Form onSubmit={handleUpdate}>
        <p>닉네임</p>
        <Input
          type="text"
          name="nickname"
          value={userNickname.nickname}
          onChange={handleChange}
          required
          placeholder="Nickname"
        />

        <UpdateButton type="submit">프로필 업데이트</UpdateButton>
      </Form>
    </ProfileContainer>
  );

  // 토큰을 내가 서버에 보내주면 이토큰을 가지고 리스폰스에 유저 프로필을 넘겨준다.
};

export default Profile;

const ProfileContainer = styled.div`
  background-color: #e1e1e1;
  width: 400px;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  gap: 20px;
  padding: 30px;
  border-radius: 10px;
`;

const Input = styled.input`
  height: 40px;
  border-radius: 10px;
`;

const UpdateButton = styled.button`
  height: 50px;
  border-radius: 10px;
  background-color: red;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
