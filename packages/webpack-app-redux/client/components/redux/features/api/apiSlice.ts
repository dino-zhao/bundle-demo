// Or from '@reduxjs/toolkit/query/react'
import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<AxiosRequestConfig | string, unknown, unknown> =>
  async (params) => {
    const instance = axios.create({
      baseURL: baseUrl,
    })
    try {
      let result
      if (typeof params === 'string') {
        result = await instance({ url: params })
      } else {
        const { url, ...rest } = params
        result = await instance({ url: url, ...rest })
      }
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }
export const apiSlice = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: '/api',
  }),
  tagTypes: ['Posts', 'Users', 'LazyPosts'],
  endpoints: () => ({}),
})
