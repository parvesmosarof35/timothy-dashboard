// src/redux/api/statistics/cancelRefundApi.js
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const cancelRefundApi = createApi({
  reducerPath: 'cancelRefundApi',
  baseQuery,
  tagTypes: ['CancelRefund'],
  endpoints: (builder) => ({
    getCancelRefundStats: builder.query({
      query: (yearRange = '2025') => `/statistics/cancel-refund-contracts?yearRange=${yearRange}`,
      providesTags: ['CancelRefund'],
    }),
  }),
});

export const { useGetCancelRefundStatsQuery } = cancelRefundApi;
