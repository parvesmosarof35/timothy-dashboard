// src/api.js
import axios from 'axios';

<<<<<<< HEAD
// const baseURL = 'https://api.fasifys.com/api/v1'; // <-- easily replaceable
=======
// const baseURL = 'https://timothy-backend.onrender.com/api/v1'; // <-- easily replaceable
>>>>>>> a4043d08e86469869d7f8014a2fda4f07ebde0d0
const baseURL = import.meta.env.VITE_BASE_URL; // <-- easily replaceable

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
