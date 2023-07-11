import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_API } from 'constants/apiPaths.constants';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: USERS_API,
  }),
  endpoints: (builder) => ({
    getRandomUser: builder.query({
      query: () => '',
    }),
    getRandomUsersList: builder.query({
      query: () => ({
        url: '/',
        method: 'GET',
        params: {
          results: 20,
        },
      }),
    }),
  }),
});

export const { useGetRandomUserQuery, useGetRandomUsersListQuery } = userApi;

export default userApi;
