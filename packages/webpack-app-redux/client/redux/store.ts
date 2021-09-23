import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/pokemon";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "./reducers";
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
//这个地方不能使用module.hot?.accept,否则无效
if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
setupListeners(store.dispatch);
