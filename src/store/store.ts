import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar";
import { PostsApi } from "./api/endpoints/Posts";
import { ObjectsApi } from "./api/endpoints/Objects";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    [PostsApi.reducerPath]: PostsApi.reducer,
    [ObjectsApi.reducerPath]: ObjectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(PostsApi.middleware)
      .concat(ObjectsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
