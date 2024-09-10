import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;

  //여기 리스펀스 변수안에 들어가는것이 서버로부터 받는 정보
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProfile = async (userNickname, token) => {
  console.log("token", token);
  const response = await axios.patch(
    `${API_URL}/profile`,
    { nickname: userNickname },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

//이건 에이피아이 연결과 경로지정해주는것
//정보를 넣어주는건 유저가 입렵하면 넘어가는거라 다음 차례에 나옴
