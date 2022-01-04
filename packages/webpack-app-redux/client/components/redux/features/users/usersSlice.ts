import { apiSlice } from '../api/apiSlice'
import { User } from 'server/user.controller'
export type { User } from 'server/user.controller'
import {
  createEntityAdapter,
  EntityState,
  createSelector,
} from '@reduxjs/toolkit'
import { RootState } from '@components/redux/app/store'

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
export const selectUsersResult = usersSlice.endpoints.getUsers.select() as (
  state: RootState
) => {
  data: EntityState<User>
}

const selectUsersData = createSelector(selectUsersResult, (usersResult) => {
  return usersResult.data
})

export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors<RootState>(
    (state) => selectUsersData(state) ?? initialState
  )
