import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./countSlice";
import { pokemonApi } from "../services/pokemon";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { booksSlice, selectBookById } from "./bookSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  devTools: true,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
setupListeners(store.dispatch);
