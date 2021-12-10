import { apiSlice } from '../api/apiSlice'
import { User } from 'server/user.controller'
export type { User } from 'server/user.controller'
import {
  createEntityAdapter,
  EntityState,
  createSelector,
} from '@reduxjs/toolkit'

const usersAdapter = createEntityAdapter<User>()
const initialState = usersAdapter.getInitialState()
export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<EntityState<User>, void>({
      query: () => `users`,
      transformResponse: (response: { data: User[] }) =>
        usersAdapter.setAll(initialState, response.data),
      providesTags: ['Users'],
    }),
  }),
})

export const { useGetUsersQuery } = usersSlice
export const selectUsersResult = usersSlice.endpoints.getUsers.select()

const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data
)

export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors((state) => selectUsersData(state) ?? initialState)
