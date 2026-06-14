// src/redux/api/aboutUs/aboutUsApi.js
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const aboutUsApi = createApi({
  reducerPath: 'aboutUsApi',
  baseQuery,
  tagTypes: ['AboutUs'],
  endpoints: (builder) => ({
    getAboutUs: builder.query({
      query: () => '/about-us',
      providesTags: ['AboutUs'],
    }),
    updateAboutUs: builder.mutation({
      query: (data) => ({
        url: `/about-us`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['AboutUs'],
    }),
  }),
});

export const { useGetAboutUsQuery, useUpdateAboutUsMutation } = aboutUsApi;
