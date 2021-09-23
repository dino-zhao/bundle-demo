import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react'

import axios, { AxiosRequestConfig, AxiosError } from 'axios'
const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method?: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method: method,
        data,
        params,
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }
export const pokemonApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: [],
  reducerPath: 'pokemonApi',
  //   refetchOnMountOrArgChange: true, //不用缓存
  //   refetchOnFocus: true, //window focus时自动fetch
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => ({ url: '/test', method: 'get', params: { a: 2 } }),
      //   transformResponse: (response) => {
      //     console.log(response);
      //     return response;
      //   },
    }),
    log: builder.mutation({
      query: () => ({
        url: '/post',
        method: 'POST',
        data: { test: 'post' },
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery, useLogMutation } = pokemonApi
