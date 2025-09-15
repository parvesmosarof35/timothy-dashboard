import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const adminChannelsApi = createApi({
  reducerPath: 'adminChannelsApi',
  baseQuery,
  tagTypes: ['AdminChannels'],
  endpoints: (builder) => ({
    getAllChannelsForAdmin: builder.query({
      query: () => '/messages/channels',
      providesTags: ['AdminChannels'],
    }),
  }),
});

export const { 
  useGetAllChannelsForAdminQuery 
} = adminChannelsApi;