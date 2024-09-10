import axios from "axios";

const API_URL = "http://localhost:3000/testResults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.put(API_URL, resultData);
  return response.data;
};
//일단 Put으로 했는데 patch일까?

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`API_URL/${id}`);
  return response.data;
};

export const updateTestResultView = async (id, view) => {
  const response = await axios.get(`API_URL/${id}`, { view });
  return response.data;
};
//이함수는 보여주는 함수같은데 get쓰는거 맞는지
