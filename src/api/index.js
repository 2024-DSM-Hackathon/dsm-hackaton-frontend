import axios from "axios";

const baseUrl = "http://192.168.0.61:8080";

export const AuthInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export const Instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

AuthInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AuthInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isAxiosError(error) && error.response) {
      const { message } = error.response.data;
      if (message === "로그인이 필요합니다.") {
        localStorage.removeItem("access_token");
        window.location.href = "/auth/signin";
      }
    } else {
      throw error;
    }
  }
);
