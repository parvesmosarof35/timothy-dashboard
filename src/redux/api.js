// src/api.js
import axios from 'axios';

const baseURL = 'https://timothy-backend.vercel.app/api/v1'; // <-- easily replaceable

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});


// Automatically add access token to all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default api;
