import axios from "axios";

export const API = axios.create({
  baseURL: "http://15.164.160.92", //백엔드단 endpoint
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 쿠키사용
});
export default API;


