// src/redux/api/termsConditions/termsConditionsApi.js
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const termsConditionsApi = createApi({
  reducerPath: 'termsConditionsApi',
  baseQuery,
  tagTypes: ['TermsConditions'],
  endpoints: (builder) => ({
    getTermsConditions: builder.query({
      query: () => '/terms-conditions',
      providesTags: ['TermsConditions'],
    }),
    updateTermsConditions: builder.mutation({
<<<<<<< HEAD
      query: (data) => ({
        url: `/terms-conditions`,
        method: 'POST',
=======
      query: ({ id, data }) => ({
        url: `/terms-conditions/update/${id}`,
        method: 'PATCH',
>>>>>>> a4043d08e86469869d7f8014a2fda4f07ebde0d0
        body: data,
      }),
      invalidatesTags: ['TermsConditions'],
    }),
  }),
});

export const { useGetTermsConditionsQuery, useUpdateTermsConditionsMutation } = termsConditionsApi;
