// src/redux/api/statistics/getuserDemographics.js
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const userDemographicsApi = createApi({
  reducerPath: 'userDemographicsApi',
  baseQuery,
  tagTypes: ['UserDemographics'],
  endpoints: (builder) => ({
    getUserDemographics: builder.query({
      // Default to THIS_MONTH and allow overriding with other uppercase tokens
      query: (timeRange = 'THIS_YEAR') => `/statistics/user-demographics?timeRange=${timeRange}`,
      providesTags: ['UserDemographics'],
    }),
  }),
});

export const { useGetUserDemographicsQuery } = userDemographicsApi;