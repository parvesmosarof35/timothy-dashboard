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
      query: (data) => ({
        url: `/terms-conditions`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['TermsConditions'],
    }),
  }),
});

export const { useGetTermsConditionsQuery, useUpdateTermsConditionsMutation } = termsConditionsApi;
