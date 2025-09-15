import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = import.meta.env.VITE_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set('Authorization', `${token}`);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});
