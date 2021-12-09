import { apiSlice } from '../api/apiSlice'
import { User } from 'server/user.controller'
export type { User } from 'server/user.controller'
import { createEntityAdapter, EntityState } from '@reduxjs/toolkit'

const usersAdapter = createEntityAdapter<User>()
const initialState = usersAdapter.getInitialState()
export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<EntityState<User>, number>({
      query: (id) => ({ url: `users/${id}` }),
      transformResponse: (response: { data: User }) =>
        usersAdapter.setAll(initialState, response),
      providesTags: ['Users'],
    }),
    getUsers: build.query<User[], void>({
      query: () => `users`,
      transformResponse: (response: { data: User[] }) => response.data,
      providesTags: ['Users'],
    }),
  }),
})

export const { useGetUserQuery, useGetUsersQuery } = usersSlice
