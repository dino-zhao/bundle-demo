import { createApi, BaseQueryFn } from "@reduxjs/toolkit/query/react";

import axios, { AxiosRequestConfig, AxiosError } from "axios";
const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method: method,
        data,
      });
      console.log(result);
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
export const pokemonApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: [],
  reducerPath: "pokemonApi",
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => ({ url: "/test", method: "get" }),
      transformResponse: (response) => {
        console.log(response);
        console.log("tag");
        return response;
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi;
