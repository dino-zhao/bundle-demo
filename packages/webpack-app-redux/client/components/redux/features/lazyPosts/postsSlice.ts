import { apiSlice } from '../api/apiSlice'
import { Post } from 'server/post.controller'
export type { Post } from 'server/post.controller'
export const lazyPostSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], string>({
      query: (v) => {
        console.log(v)
        return 'posts'
      },
      transformResponse: (response: { data: Post[] }) => response.data,
      providesTags: ['LazyPosts'],
    }),
  }),
})

export const { useLazyGetPostsQuery } = lazyPostSlice
