import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery,
  tagTypes: ['Messages'],
  endpoints: (builder) => ({
    getMessagesByChannelName: builder.query({
      query: (channelName) => `/messages/get-message/${channelName}`,
      providesTags: (result, error, channelName) => [{ type: 'Messages', id: channelName }],
    }),
  }),
});

export const { 
  useGetMessagesByChannelNameQuery 
} = messagesApi;