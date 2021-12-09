// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'server/store'
export type { Post } from 'server/store'
export const postApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getPost: build.query<Post, number>({
      query: (id) => ({ url: `posts/${id}` }),
      transformResponse: (response: { data: Post }) => response.data,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
    getPosts: build.query<Post[], void>({
      query: () => `posts`,
      transformResponse: (response: { data: Post[] }) => response.data,
      providesTags: ['Post'],
    }),
  }),
})

export const { useGetPostQuery, useGetPostsQuery } = postApi
