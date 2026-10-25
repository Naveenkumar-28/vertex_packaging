import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({
  baseURL: API,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const submitForm = async (payload) => {
  try {
    const { data } = await api.post("/submissions", payload);
    return data;

  } catch (error) {
    console.log({ "err": error });
    return null;
  }
};

export const fetchSubmissions = async (type) => {
  const { data } = await api.get("/submissions", { params: type ? { type } : {} });
  return data;
};

export const fetchSubmissionStats = async () => {

  const { data } = await api.get("/submissions/stats");
  return data;
};

// Login
export const loginAdmin = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};

// Check authentication
export const getCurrentAdmin = async () => {
  try {
    const response = await api.get("/auth/me");

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      "Not authenticated"
    );
  }
};

// Logout
export const logoutAdmin = async () => {
  const response = await api.post("/auth/logout");

  return response.data;
};

export default api;




