// src/redux/api/privacyPolicy/privacyPolicyApi.js
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const privacyPolicyApi = createApi({
  reducerPath: 'privacyPolicyApi',
  baseQuery,
  tagTypes: ['PrivacyPolicy'],
  endpoints: (builder) => ({
    getPrivacyPolicy: builder.query({
      query: () => '/policy',
      providesTags: ['PrivacyPolicy'],
    }),
    updatePrivacyPolicy: builder.mutation({
<<<<<<< HEAD
      query: (data) => ({
        url: `/policy`,
        method: 'POST',
=======
      query: ({ id, data }) => ({
        url: `/policy/update/${id}`,
        method: 'PATCH',
>>>>>>> a4043d08e86469869d7f8014a2fda4f07ebde0d0
        body: data,
      }),
      invalidatesTags: ['PrivacyPolicy'],
    }),
  }),
});

export const { useGetPrivacyPolicyQuery, useUpdatePrivacyPolicyMutation } = privacyPolicyApi;
