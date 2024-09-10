import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;

  //여기 리스펀스 변수안에 들어가는것이 내가보내는 정보들인지 아니면 서버로부터 받는 정보인지 확실히 하기->물어보기
};
console.log("여기", register); //안찍힘

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, token);
  return response.data;
};

export const updateProfile = async (formData) => {
  const response = await axios.patch(`${API_URL}/profile`, formData);
  return response.data;
};

//이건 에이피아이 연결과 경로지정해주는것
//정보를 넣어주는건 유저가 입렵하면 넘어가는거라 다음 차례에 나옴
