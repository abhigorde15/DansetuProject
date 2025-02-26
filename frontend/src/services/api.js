import axios from "axios";

const API_URL = "http://localhost:8080/auth"; // Change this if needed

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};
