import { apiSlice } from '../api/apiSlice'
import { Post } from 'server/post.controller'
export type { Post } from 'server/post.controller'
export const postsSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPost: build.query<Post, number>({
      query: (id) => ({ url: `posts/${id}` }),
      transformResponse: (response: { data: Post }) => response.data,
      providesTags: ['Posts'],
    }),
    getPosts: build.query<Post[], void>({
      query: () => `posts`,
      transformResponse: (response: { data: Post[] }) => response.data,
      providesTags: ['Posts'],
    }),
    updatePost: build.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (patch) => ({
        url: `post`,
        method: 'Post',
        body: patch,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: { data: Post }) => response.data,
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const { useGetPostQuery, useGetPostsQuery, useUpdatePostMutation } =
  postsSlice
