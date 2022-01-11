import { apiSlice } from '../api/apiSlice'
import { User } from 'server/user.controller'
export type { User } from 'server/user.controller'
export const lazyPostSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getLazyUser: build.query<User[], string>({
      query: (v) => {
        console.log(v)
        return 'users'
      },
      transformResponse: (response: { data: User[] }) => response.data,
      providesTags: ['LazyUser'],
    }),
  }),
})

export const { useLazyGetLazyUserQuery } = lazyPostSlice
