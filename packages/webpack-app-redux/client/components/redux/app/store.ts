import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
export type RootState = ReturnType<typeof store.getState>
