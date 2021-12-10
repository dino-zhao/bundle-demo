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
      async onQueryStarted({ id, name }, { dispatch, queryFulfilled }) {
        //乐观更新
        const patchResult = dispatch(
          postsSlice.util.updateQueryData('getPosts', undefined, (draft) => {
            const post = draft.find((post) => post.id === id)
            console.log(post)
            if (post) {
              post.name = name + '2222'
            }
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const { useGetPostQuery, useGetPostsQuery, useUpdatePostMutation } =
  postsSlice
