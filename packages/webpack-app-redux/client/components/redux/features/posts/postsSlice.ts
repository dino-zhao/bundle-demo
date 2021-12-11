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
      query: () => 'posts',
      transformResponse: (response: { data: Post[] }) => response.data,
      providesTags: ['Posts'],
    }),
    exportExcel: build.mutation<string, number>({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        let arr = []
        for (let i = 0; i < arg; i++) {
          arr.push(await baseQuery({ url: 'posts' }))
        }
        console.log('导出excel')
        return {
          data: '111',
        }
      },
    }),
    updatePost: build.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (patch) => ({
        url: `post`,
        method: 'post',
        data: patch,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: { data: Post }) => response.data,
      invalidatesTags: ['Posts'],
      async onQueryStarted({ id, name }, { dispatch, queryFulfilled }) {
        //乐观更新
        const patchResult = dispatch(
          postsSlice.util.updateQueryData('getPosts', undefined, (draft) => {
            const post = draft.find((post) => post.id === id)
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

export const {
  useGetPostQuery,
  useGetPostsQuery,
  useUpdatePostMutation,
  useExportExcelMutation,
} = postsSlice
